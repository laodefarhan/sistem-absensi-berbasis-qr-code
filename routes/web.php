<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\QRRegistrationController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/qr/decrypt', [QRRegistrationController::class, 'decrypt'])->name('qr.decrypt');
Route::post('/qr/generate', [QRRegistrationController::class, 'generatePayload'])->name('qr.generate'); // Secure this for admin only later

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
Route::middleware('role:super_admin,guru_kepsek')->group(function () {
    Route::get('/data-siswa', [\App\Http\Controllers\Admin\StudentController::class, 'index'])->name('admin.students.index');
    Route::patch('/data-siswa/{user}/toggle-status', [\App\Http\Controllers\Admin\StudentController::class, 'toggleStatus'])->name('admin.students.toggle');

    Route::get('/nilai', [\App\Http\Controllers\Admin\ScoreController::class, 'index'])->name('admin.scores.index');
    Route::post('/nilai', [\App\Http\Controllers\Admin\ScoreController::class, 'store'])->name('admin.scores.store');
});

Route::middleware('role:super_admin')->group(function () {
    Route::get('/data-guru', [\App\Http\Controllers\Admin\TeacherController::class, 'index'])->name('admin.teachers.index');
    Route::patch('/data-guru/{user}/toggle-status', [\App\Http\Controllers\Admin\TeacherController::class, 'toggleStatus'])->name('admin.teachers.toggle');

    Route::get('/data-satpam', [\App\Http\Controllers\Admin\SecurityController::class, 'index'])->name('admin.security.index');
    Route::patch('/data-satpam/{user}/toggle-status', [\App\Http\Controllers\Admin\SecurityController::class, 'toggleStatus'])->name('admin.security.toggle');

    Route::get('/data-kelas', [\App\Http\Controllers\Admin\GradeController::class, 'index'])->name('admin.grades.index');
    Route::post('/data-kelas', [\App\Http\Controllers\Admin\GradeController::class, 'store'])->name('admin.grades.store');
    Route::delete('/data-kelas/{grade}', [\App\Http\Controllers\Admin\GradeController::class, 'destroy'])->name('admin.grades.destroy');

    Route::get('/qr-code', [\App\Http\Controllers\Admin\QRCodeController::class, 'index'])->name('admin.qrcodes.index');
    Route::get('/jajaran-staff', function () {
        return Inertia::render('admin/staff/index');
    })->name('admin.staff.index');
    Route::get('/laporan', [\App\Http\Controllers\Admin\ReportController::class, 'index'])->name('admin.reports.index');
});

    Route::middleware('role:siswa')->group(function () {
        Route::get('/absensi-siswa', function () {
            return Inertia::render('dashboard'); // Placeholder for now
        })->name('student.attendance');
        Route::get('/nilai-siswa', function () {
            return Inertia::render('dashboard'); // Placeholder for now
        })->name('student.scores');
    });

    Route::middleware('role:super_admin,guru_kepsek,satpam')->group(function () {
        Route::get('/absensi', [\App\Http\Controllers\AttendanceController::class, 'index'])->name('attendance.index');
        Route::post('/absensi/scan', [\App\Http\Controllers\AttendanceController::class, 'scan'])->name('attendance.scan');
        
        Route::get('/izin-keluar', function () {
            return Inertia::render('attendance/exit-permit');
        })->name('attendance.exit-permit');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
