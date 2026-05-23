import { Link } from '@inertiajs/react';

export default function CTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-primary-container/40 to-surface-container rounded-[40px] p-12 text-center">
                    <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]"></div>
                    <h2 className="relative z-10 mb-6 font-display text-headline-lg md:text-[48px]">Siap Mendigitalkan Sekolah Anda?</h2>
                    <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                        Bergabunglah dengan ekosistem SMAN 1 Digital Nusantara dan tingkatkan kualitas manajemen pendidikan hari ini.
                    </p>
                    <div className="relative z-10 flex flex-col justify-center gap-4 md:flex-row">
                        <Link
                            href={route('register')}
                            className="rounded-2xl bg-primary px-12 py-4 font-headline text-on-primary shadow-xl shadow-primary/20 transition-all hover:bg-primary-container"
                        >
                            Daftar Sekarang
                        </Link>
                        <button className="glass-card rounded-2xl px-12 py-4 font-headline text-on-surface transition-all hover:bg-white/5">Hubungi Tim Marketing</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
