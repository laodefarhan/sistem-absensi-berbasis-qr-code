<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $fillable = [
        'student_id',
        'scanned_by',
        'status',
        'recorded_at',
        'location',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function scanner()
    {
        return $this->belongsTo(User::class, 'scanned_by');
    }
}
