<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the students.
     */
    public function index()
    {
        $students = User::where('role', User::ROLE_SISWA)
            ->with('student')
            ->latest()
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => $user->status,
                    'nis' => $user->student->nis ?? '-',
                    'uuid' => $user->student->uuid ?? '-',
                    'created_at' => $user->created_at->format('d M Y'),
                ];
            });

        return Inertia::render('admin/students/index', [
            'students' => $students
        ]);
    }

    /**
     * Toggle student status.
     */
    public function toggleStatus(User $user)
    {
        $user->update([
            'status' => $user->status === 'active' ? 'inactive' : 'active'
        ]);

        return back()->with('success', 'Status siswa berhasil diperbarui.');
    }
}
