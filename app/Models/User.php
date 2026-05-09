<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
    ];

    public function isActive(): bool
    {
        return $this->status === 'active';
    }

    public function student()
    {
        return $this->hasOne(Student::class);
    }

    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }

    const ROLE_SUPER_ADMIN = 'super_admin';
    const ROLE_GURU_KEPSEK = 'guru_kepsek';
    const ROLE_SATPAM = 'satpam';
    const ROLE_SISWA = 'siswa';

    public function isSuperAdmin(): bool
    {
        return $this->role === self::ROLE_SUPER_ADMIN;
    }

    public function isGuruKepsek(): bool
    {
        return $this->role === self::ROLE_GURU_KEPSEK;
    }

    public function isSatpam(): bool
    {
        return $this->role === self::ROLE_SATPAM;
    }

    public function isSiswa(): bool
    {
        return $this->role === self::ROLE_SISWA;
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
