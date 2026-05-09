<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function index()
    {
        $grades = Grade::with(['waliKelas', 'students'])
            ->get()
            ->map(function ($grade) {
                return [
                    'id' => $grade->id,
                    'name' => $grade->name,
                    'teacher_name' => $grade->waliKelas->name ?? 'Belum Ditentukan',
                    'student_count' => $grade->students->count(),
                ];
            });

        $teachers = User::where('role', User::ROLE_GURU_KEPSEK)->get(['id', 'name']);

        return Inertia::render('admin/grades/index', [
            'grades' => $grades,
            'teachers' => $teachers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:grades,name',
            'teacher_id' => 'nullable|exists:users,id',
        ]);

        Grade::create($request->all());

        return back()->with('success', 'Kelas berhasil ditambahkan.');
    }

    public function destroy(Grade $grade)
    {
        $grade->delete();
        return back()->with('success', 'Kelas berhasil dihapus.');
    }
}
