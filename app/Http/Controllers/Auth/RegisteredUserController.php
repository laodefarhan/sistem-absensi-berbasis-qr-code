<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse|Response
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string|in:super_admin,guru_kepsek,satpam,siswa',
            'nis' => 'nullable|string|required_if:role,siswa|unique:students,nis',
            'nip' => 'nullable|string|unique:teachers,nip',
        ]);

        if ($request->role === User::ROLE_SUPER_ADMIN) {
            if (User::where('role', User::ROLE_SUPER_ADMIN)->exists()) {
                return back()->withErrors(['role' => 'Super Admin already exists.']);
            }
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        $qrPayload = null;

        if ($user->role === User::ROLE_SISWA) {
            $uuid = (string) Str::uuid();
            $jsonData = json_encode([
                'uuid' => $uuid,
                'nis' => $request->nis,
                'name' => $user->name,
                'email' => $user->email,
            ]);
            $compressed = base64_encode(gzcompress($jsonData, 9));
            $qrPayload = Crypt::encryptString($compressed);

            Student::create([
                'user_id' => $user->id,
                'uuid' => $uuid,
                'nis' => $request->nis,
                'qr_code' => $qrPayload,
            ]);
        } elseif ($user->role === User::ROLE_GURU_KEPSEK) {
            Teacher::create([
                'user_id' => $user->id,
                'nip' => $request->nip,
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
