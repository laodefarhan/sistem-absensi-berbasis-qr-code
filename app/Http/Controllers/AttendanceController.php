<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        $attendances = Attendance::with(['student.user', 'student.grade', 'scanner'])
            ->whereDate('recorded_at', $today)
            ->latest()
            ->get();

        return Inertia::render('attendance/index', [
            'attendances' => $attendances
        ]);
    }

    public function scan(Request $request)
    {
        $request->validate(['payload' => 'required|string']);

        try {
            // 1. Decrypt & Decompress
            $decrypted = Crypt::decryptString($request->payload);
            $decompressed = gzuncompress(base64_decode($decrypted));
            $data = json_decode($decompressed, true);

            // 2. Find Student
            $student = Student::where('uuid', $data['uuid'])->first();

            if (!$student) {
                return response()->json(['success' => false, 'message' => 'Siswa tidak ditemukan.'], 404);
            }

            // 3. Check for double scan today
            $alreadyScanned = Attendance::where('student_id', $student->id)
                ->whereDate('recorded_at', Carbon::today())
                ->exists();

            if ($alreadyScanned) {
                return response()->json(['success' => false, 'message' => 'Siswa sudah melakukan absensi hari ini.'], 422);
            }

            // 4. Record Attendance
            Attendance::create([
                'student_id' => $student->id,
                'scanned_by' => auth()->id(),
                'status' => 'present',
                'recorded_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Absensi berhasil: ' . $student->user->name
            ]);

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'QR Code tidak valid.'], 422);
        }
    }
}
