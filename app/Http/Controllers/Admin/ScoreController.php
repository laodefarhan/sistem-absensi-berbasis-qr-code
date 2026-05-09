<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Score;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function index()
    {
        $scores = Score::with(['student.user', 'student.grade'])
            ->latest()
            ->get();

        $students = Student::with(['user', 'grade'])->get()->map(function ($s) {
            return [
                'id' => $s->id, 
                'name' => $s->user->name,
                'grade' => $s->grade->name ?? '-'
            ];
        });

        return Inertia::render('admin/scores/index', [
            'scores' => $scores,
            'students' => $students
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'subject' => 'required|string',
            'score' => 'required|numeric|min:0|max:100',
            'semester' => 'required|string',
        ]);

        Score::create($request->all());

        return back()->with('success', 'Nilai berhasil ditambahkan.');
    }
}
