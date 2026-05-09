<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\Grade;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ReportController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        
        // Total stats
        $totalStudents = User::where('role', User::ROLE_SISWA)->count();
        $presentToday = Attendance::whereDate('recorded_at', $today)->count();
        
        // Detailed Daily Attendance
        $attendanceHistory = Attendance::with(['student.user', 'student.grade'])
            ->orderBy('recorded_at', 'desc')
            ->get()
            ->map(function($attendance) {
                return [
                    'id' => $attendance->id,
                    'name' => $attendance->student->user->name,
                    'grade' => $attendance->student->grade->name ?? '-',
                    'time' => Carbon::parse($attendance->recorded_at)->format('H:i:s'),
                    'date' => Carbon::parse($attendance->recorded_at)->format('d-m-Y'),
                    'status' => 'Hadir'
                ];
            });

        // Attendance by Grade
        $gradeReports = Grade::with(['students.attendances' => function($q) use ($today) {
            $q->whereDate('recorded_at', $today);
        }])->get()->map(function($grade) {
            $presentCount = 0;
            foreach($grade->students as $student) {
                if($student->attendances->count() > 0) $presentCount++;
            }
            return [
                'name' => $grade->name,
                'total' => $grade->students->count(),
                'present' => $presentCount
            ];
        });

        return Inertia::render('admin/reports/index', [
            'stats' => [
                'total_students' => $totalStudents,
                'present_today' => $presentToday,
                'absence_rate' => $totalStudents > 0 ? round((($totalStudents - $presentToday) / $totalStudents) * 100, 2) : 0
            ],
            'gradeReports' => $gradeReports,
            'attendanceHistory' => $attendanceHistory
        ]);
    }
}
