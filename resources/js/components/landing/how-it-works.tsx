export default function HowItWorks() {
    return (
        <section className="bg-surface-dim py-24">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="mb-20 text-center">
                    <h2 className="font-headline text-headline-lg">Alur Absensi Digital</h2>
                    <p className="mt-4 text-on-surface-variant">Proses cepat dan mudah hanya dalam hitungan detik</p>
                </div>
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent md:block"></div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="glass-card mb-6 flex h-16 w-16 items-center justify-center border-primary/40 rounded-full transition-transform group-hover:scale-110">
                            <span className="font-bold text-primary">01</span>
                        </div>
                        <h4 className="mb-2 font-headline text-headline-md">Buka Aplikasi</h4>
                        <p className="text-sm text-on-surface-variant">Siswa membuka aplikasi mobile SMAN 1 Digital</p>
                    </div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="glass-card mb-6 flex h-16 w-16 items-center justify-center border-secondary/40 rounded-full transition-transform group-hover:scale-110">
                            <span className="font-bold text-secondary">02</span>
                        </div>
                        <h4 className="mb-2 font-headline text-headline-md">Scan QR Code</h4>
                        <p className="text-sm text-on-surface-variant">Scan kode QR yang terdapat pada gerbang atau kelas</p>
                    </div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="glass-card mb-6 flex h-16 w-16 items-center justify-center border-tertiary/40 rounded-full transition-transform group-hover:scale-110">
                            <span className="font-bold text-tertiary">03</span>
                        </div>
                        <h4 className="mb-2 font-headline text-headline-md">Verifikasi Data</h4>
                        <p className="text-sm text-on-surface-variant">Sistem memvalidasi lokasi & waktu secara otomatis</p>
                    </div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="glass-card mb-6 flex h-16 w-16 items-center justify-center border-primary/40 bg-primary/10 rounded-full transition-transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                        </div>
                        <h4 className="mb-2 font-headline text-headline-md">Notifikasi Orang Tua</h4>
                        <p className="text-sm text-on-surface-variant">Wali murid menerima laporan absensi via WhatsApp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
