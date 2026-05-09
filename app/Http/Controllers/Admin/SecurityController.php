<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SecurityController extends Controller
{
    public function index()
    {
        $security = User::where('role', User::ROLE_SATPAM)
            ->latest()
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => $user->status,
                    'created_at' => $user->created_at->format('d M Y'),
                ];
            });

        return Inertia::render('admin/security/index', [
            'security' => $security
        ]);
    }

    public function toggleStatus(User $user)
    {
        $user->update([
            'status' => $user->status === 'active' ? 'inactive' : 'active'
        ]);

        return back()->with('success', 'Status satpam berhasil diperbarui.');
    }
}
