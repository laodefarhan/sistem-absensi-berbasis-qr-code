<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function index()
    {
        $teachers = User::where('role', User::ROLE_GURU_KEPSEK)
            ->with('teacher')
            ->latest()
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => $user->status,
                    'nip' => $user->teacher->nip ?? '-',
                    'created_at' => $user->created_at->format('d M Y'),
                ];
            });

        return Inertia::render('admin/teachers/index', [
            'teachers' => $teachers
        ]);
    }

    public function toggleStatus(User $user)
    {
        $user->update([
            'status' => $user->status === 'active' ? 'inactive' : 'active'
        ]);

        return back()->with('success', 'Status guru berhasil diperbarui.');
    }
}
