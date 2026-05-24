export default function Features() {
    return (
        <section className="py-24 bg-surface-container-low" id="features">
            <div className="container mx-auto px-container-padding">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg mb-4">Ekosistem Smart School</h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto">
                        Fitur canggih yang mempermudah interaksi antara guru, siswa, dan orang tua dalam satu genggaman.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap h-auto">
                    {/* WhatsApp Notification */}
                    <div className="md:col-span-8 glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="w-12 h-12 bg-[#14B8A6]/20 text-[#14B8A6] rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        chat
                                    </span>
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-2">WhatsApp Notification</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                    Notifikasi kehadiran, tugas, dan pengumuman sekolah dikirim secara otomatis ke nomor WhatsApp orang tua secara real-time.
                                </p>
                            </div>
                            <div className="hidden lg:block w-64 h-64 glass-card rounded-2xl p-4 rotate-6 group-hover:rotate-0 transition-transform">
                                <div className="bg-[#14B8A6] h-1 w-1/2 mb-4 rounded-full"></div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-white/5 rounded w-full"></div>
                                    <div className="h-4 bg-white/5 rounded w-3/4"></div>
                                    <div className="h-10 bg-white/10 rounded w-full flex items-center px-3 font-label-sm text-label-sm">
                                        "Siswa Ananda telah hadir di sekolah"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* QR Absensi */}
                    <div className="md:col-span-4 glass-card glass-card-hover rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                        <div className="relative w-40 h-40 bg-white p-4 rounded-2xl mb-6 overflow-hidden">
                            <div className="scanning-line"></div>
                            <img
                                alt="QR Code"
                                className="w-full h-full opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC59J6lLFi79o4CLamZyEGmsryEfv8gHxTjEiua5w_OP9anERmYxoc9s5z64Sv5Jhy_eN-oLuPFB5CCR9jV304L-6F1BrKJ0xmsg_maH5azCYC8DhenlCo3ScEAInJ8ffGVXvkuE2rhz7w9E21QJ4mu87mIm74QYI_flVNdZzzJBW3Wua0Tld9es6dkfHWn62GdpqNLQ38VBoW3fbtlIwzS_64NOy2mixCaQdP7pmpqTg6AFURyLuhJLenZUHxlyDtLdyfpLNw4yhUS"
                            />
                        </div>
                        <h3 className="font-headline-md text-headline-md mb-2">QR Absensi</h3>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                            Presensi cepat dan akurat menggunakan pemindaian kode QR melalui aplikasi mobile siswa.
                        </p>
                    </div>
                    {/* Futuristic Dashboard */}
                    <div className="md:col-span-12 glass-card glass-card-hover rounded-3xl p-8 overflow-hidden relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="font-headline-md text-headline-md mb-4">Futuristic Dashboard</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                                    Pantau perkembangan akademik, statistik kehadiran, dan laporan nilai dalam satu dasbor visual yang interaktif dan mudah dipahami.
                                </p>
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-primary font-bold text-headline-md">98%</div>
                                        <div className="text-label-sm text-on-surface-variant">Efisiensi</div>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <div className="text-center">
                                        <div className="text-tertiary font-bold text-headline-md">24/7</div>
                                        <div className="text-label-sm text-on-surface-variant">Akses</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-64 rounded-2xl bg-surface-container p-4 border border-white/5 shadow-inner">
                                <div className="flex gap-4 h-full items-end">
                                    <div className="flex-1 bg-primary/40 rounded-t-lg transition-all hover:bg-primary" style={{ height: '60%' }}></div>
                                    <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '40%' }}></div>
                                    <div className="flex-1 bg-primary/60 rounded-t-lg transition-all hover:bg-primary" style={{ height: '80%' }}></div>
                                    <div className="flex-1 bg-primary/30 rounded-t-lg transition-all hover:bg-primary" style={{ height: '50%' }}></div>
                                    <div className="flex-1 bg-primary/50 rounded-t-lg transition-all hover:bg-primary" style={{ height: '70%' }}></div>
                                    <div className="flex-1 bg-primary/80 rounded-t-lg transition-all hover:bg-primary" style={{ height: '95%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
