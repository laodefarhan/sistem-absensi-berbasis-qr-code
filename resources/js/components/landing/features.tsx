export default function Features() {
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="mb-16 text-center">
                    <span className="font-label-md tracking-widest text-secondary uppercase">Keunggulan Sistem</span>
                    <h2 className="mt-4 font-headline text-headline-lg">Fitur Utama Platform Kami</h2>
                </div>
                <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
                    <div className="glass-card group relative flex flex-col justify-end overflow-hidden rounded-3xl p-8 md:col-span-8">
                        <img
                            className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo3uo510KLZGkkZSrksKlI2W4NuGNKD9VaM55bSeMCb70W-2c1FsW-76efD7mI3ZN3kpSaEOzdobbw9sD8qGvNVyfrbpK3hXLbo0hzw9M5rWySvqv_6BbOyHezZ7gPf6qxJcqxNxW_5D0YWHj5Gc6yw2wh51EY2zFSgN0C76E16gv6z9IlVu4f5U2qkZCDoFjPL9Suf1I8hhAipKcxtfUeQOcMh-4c4xpzGpA4KwbBL8JJAlRDeT81n0gNP_BK0DP6RwbWrax_6tw"
                            alt="Real-time Analytics Dashboard"
                        />
                        <div className="relative z-10">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                    <span className="material-symbols-outlined text-primary">monitoring</span>
                                </div>
                                <h3 className="font-headline text-headline-md">Real-time Monitoring</h3>
                            </div>
                            <p className="max-w-lg text-on-surface-variant">Pantau kehadiran siswa dan staf secara instan. Laporan harian, mingguan, dan bulanan tersedia dalam satu klik melalui dasbor analitik yang intuitif.</p>
                        </div>
                    </div>
                    <div className="glass-card group flex flex-col justify-between border-secondary/20 rounded-3xl p-8 md:col-span-4">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                            <span className="material-symbols-outlined text-3xl text-secondary">qr_code_2</span>
                        </div>
                        <div>
                            <h3 className="mb-4 font-headline text-headline-md">Secure QR Attendance</h3>
                            <p className="text-on-surface-variant">Sistem absensi nirsentuh dengan algoritma enkripsi dinamis untuk mencegah kecurangan dan manipulasi data.</p>
                        </div>
                    </div>
                    <div className="glass-card group flex flex-col justify-between rounded-3xl p-8 md:col-span-4">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-tertiary/10">
                            <span className="material-symbols-outlined text-3xl text-tertiary">chat</span>
                        </div>
                        <div>
                            <h3 className="mb-4 font-headline text-headline-md">WhatsApp Integration</h3>
                            <p className="text-on-surface-variant">Notifikasi otomatis ke orang tua saat siswa melakukan absensi masuk atau pulang sekolah secara instan.</p>
                        </div>
                    </div>
                    <div className="glass-card relative flex flex-col justify-center overflow-hidden rounded-3xl p-8 md:col-span-8">
                        <div className="flex flex-col items-center gap-8 md:flex-row">
                            <div className="flex-1">
                                <h3 className="mb-4 font-headline text-headline-md">Keamanan Data Terpusat</h3>
                                <p className="text-on-surface-variant">Seluruh data tersimpan aman di infrastruktur cloud dengan proteksi berlapis dan backup berkala.</p>
                            </div>
                            <div className="flex flex-1 justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
                                    <div className="glass-card relative z-10 flex h-32 w-32 items-center justify-center border-primary/30 rounded-full">
                                        <span className="material-symbols-outlined text-5xl text-primary">security</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
