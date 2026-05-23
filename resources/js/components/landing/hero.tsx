import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20" id="home">
            <div className="absolute inset-0 z-0">
                <img
                    className="h-full w-full scale-105 object-cover opacity-30"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC92rdmcX6XmyaoskXKhrYjA4513DAvJGs1LVTK_V2pF0nhBkjg-92WPCPBHifblCGVrljSoe0wH7znWnIz9JO0kva4VPB8dmhTIjAwubVtTiuwoDEJGcs-n62e4kuTSQkhpv921xBR-TRYId1kaS6ec-3VJO2JFryeHqTdvwo2sTqiPUj6h8g_7bb0GsHKJS4yXgLJwQEo7C0tbcDcMAMX8lO_58u9DoZFjDCYeGHk3UE4QHTo0DYpQy99Q0yuaADe3_EJhDuOSew"
                    alt="Modern School Architecture"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-margin-mobile text-center md:px-margin-desktop">
                <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2">
                    <span className="material-symbols-outlined animate-pulse text-sm text-secondary">new_releases</span>
                    <span className="text-label-md tracking-widest text-secondary uppercase">Transformasi Digital 2024</span>
                </div>
                
                <h1 className="mx-auto mb-6 max-w-4xl font-display text-display-lg leading-tight text-on-surface md:text-[64px] lg:leading-[1.1]">
                    Sistem Absensi & Manajemen <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sekolah Masa Depan</span>
                </h1>
                
                <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                    Wujudkan ekosistem pendidikan yang transparan, aman, dan efisien dengan teknologi manajemen berbasis cloud tercanggih di Indonesia.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                    <Link
                        href={route('register')}
                        className="w-full rounded-xl bg-gradient-to-r from-primary-container to-primary px-10 py-4 font-headline text-headline-md text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 md:w-auto"
                    >
                        Mulai Sekarang
                    </Link>
                    <Link
                        href={route('login')}
                        className="glass-card w-full rounded-xl border-white/20 px-10 py-4 font-headline text-headline-md text-on-surface transition-colors hover:bg-white/5 md:w-auto"
                    >
                        Masuk Sistem
                    </Link>
                </div>
            </div>

            {/* Hero Floating Stats - Better Positioning */}
            <div className="relative z-20 mb-12 w-full max-w-4xl px-margin-mobile lg:block">
                <div className="glass-card grid grid-cols-1 divide-y divide-white/10 rounded-3xl border border-white/10 p-2 md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div className="p-6 text-center">
                        <div className="font-bold text-headline-lg text-primary">1.5k+</div>
                        <div className="text-label-md tracking-wider text-on-surface-variant uppercase">Siswa Aktif</div>
                    </div>
                    <div className="p-6 text-center">
                        <div className="font-bold text-headline-lg text-secondary">99.9%</div>
                        <div className="text-label-md tracking-wider text-on-surface-variant uppercase">Uptime Absensi</div>
                    </div>
                    <div className="p-6 text-center">
                        <div className="font-bold text-headline-lg text-tertiary">Real-Time</div>
                        <div className="text-label-md tracking-wider text-on-surface-variant uppercase">Monitoring</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
