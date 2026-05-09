<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Http\Request;

class QRCodeController extends Controller
{
    public function index()
    {
        $students = User::where('role', User::ROLE_SISWA)
            ->with(['student.grade'])
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'nis' => $user->student->nis ?? '-',
                    'grade' => $user->student->grade->name ?? '-',
                    'qr_code' => $user->student->qr_code,
                ];
            });

        return Inertia::render('admin/qrcodes/index', [
            'students' => $students
        ]);
    }
}
