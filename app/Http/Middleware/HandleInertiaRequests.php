<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
                'student' => $request->user()?->role === 'siswa' ? $request->user()->student : null,
            ],
            'activeStaff' => $request->user()?->role === 'super_admin' 
                ? \App\Models\User::whereIn('role', ['super_admin', 'guru_kepsek', 'satpam'])
                    ->select('id', 'name', 'role', 'status')
                    ->get()
                : [],
            'stats' => $request->user()?->role === 'super_admin' ? [
                'total_students' => \App\Models\User::where('role', \App\Models\User::ROLE_SISWA)->count(),
                'total_teachers' => \App\Models\User::where('role', \App\Models\User::ROLE_GURU_KEPSEK)->count(),
                'total_security' => \App\Models\User::where('role', \App\Models\User::ROLE_SATPAM)->count(),
                'attendance_today' => \App\Models\Attendance::whereDate('recorded_at', \Carbon\Carbon::today())->count(),
                'late_students' => 0,
                'out_permission' => 0,
                'teachers_present' => 0,
                'weekly_data' => collect(range(6, 0))->map(function ($daysAgo) {
                    $date = \Carbon\Carbon::today()->subDays($daysAgo);
                    return [
                        'name' => $date->translatedFormat('D'),
                        'hadir' => \App\Models\Attendance::whereDate('recorded_at', $date)->count(),
                        'lambat' => 0, // Placeholder
                        'izin' => 0,   // Placeholder
                    ];
                }),
            ] : null,
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }
}
