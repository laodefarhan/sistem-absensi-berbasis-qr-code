export default function About() {
    return (
        <section className="bg-surface-container-lowest py-24" id="about">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="flex flex-col items-center gap-16 lg:flex-row">
                    <div className="space-y-8 lg:w-1/2">
                        <div>
                            <span className="font-label-md tracking-widest text-primary uppercase">Tentang Sekolah</span>
                            <h2 className="mt-2 font-headline text-headline-lg text-on-surface md:text-[40px]">SMAN 1 Digital Nusantara</h2>
                        </div>
                        <p className="text-body-lg leading-relaxed text-on-surface-variant">
                            Sebagai pionir sekolah digital di tingkat nasional, kami mengintegrasikan teknologi canggih dalam setiap aspek pembelajaran. Dengan <strong className="text-secondary">Akreditasi A</strong>, kami berkomitmen mencetak generasi unggul yang siap menghadapi tantangan era industri 4.0.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="inner-glow rounded-2xl border border-white/5 bg-surface-container p-6">
                                <span className="material-symbols-outlined mb-3 text-primary">school</span>
                                <h4 className="mb-1 font-bold text-label-md">Guru Profesional</h4>
                                <p className="text-sm text-on-surface-variant">80+ Tenaga Pendidik Tersertifikasi</p>
                            </div>
                            <div className="inner-glow rounded-2xl border border-white/5 bg-surface-container p-6">
                                <span className="material-symbols-outlined mb-3 text-secondary">meeting_room</span>
                                <h4 className="mb-1 font-bold text-label-md">Fasilitas Modern</h4>
                                <p className="text-sm text-on-surface-variant">45 Ruang Kelas Multimedia</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-1/2">
                        <div className="glass-card group relative overflow-hidden rounded-3xl p-8">
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-colors group-hover:bg-primary/20"></div>
                            <span className="material-symbols-outlined mb-6 text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                            <h3 className="mb-4 font-headline text-headline-md">Visi</h3>
                            <p className="text-on-surface-variant">Menjadi pusat keunggulan pendidikan berbasis teknologi yang berlandaskan iman, taqwa, dan integritas global.</p>
                        </div>
                        <div className="glass-card group relative mt-6 overflow-hidden rounded-3xl p-8 md:mt-12">
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl transition-colors group-hover:bg-secondary/20"></div>
                            <span className="material-symbols-outlined mb-6 text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                            <h3 className="mb-4 font-headline text-headline-md">Misi</h3>
                            <p className="text-on-surface-variant">Menyelenggarakan pembelajaran inovatif, mengembangkan bakat digital, dan membangun karakter disiplin melalui sistem manajemen modern.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
