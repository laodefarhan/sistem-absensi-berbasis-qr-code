<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = ['name', 'teacher_id'];

    public function students()
    {
        return $this->hasMany(Student::class);
    }

    public function waliKelas()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
