<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $fillable = ['student_id', 'subject', 'score', 'semester'];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
