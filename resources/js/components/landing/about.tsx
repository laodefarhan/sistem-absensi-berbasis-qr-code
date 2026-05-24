export default function About() {
    return (
        <section className="py-24 bg-surface" id="about">
            <div className="container mx-auto px-container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden glass-card">
                            <img
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiF01jwrYR-kjBfvsTHidOvQvtXqQd_nrA2CZJP9uumPWkoYGkuKY54XETOPTqXzC4QZgm2XdBLVzAJnX-3HyAQC03PWH6Ih_Q6aouD78_HdZoCj2nPZmzB_9hWVl7MQKu9tfLgi_3aHSsc-Rd3Gdsd669qXQKlUYATyethzSLrqyHEi5iHXDSKIf8vbv-mxcfOgTV_aCkzCoJe1FPftngTVMzoLKbsEu_AV6U-08B7csU1F0U_OwMziOva_cGWfPe3ITMnF1Yi-xm"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl max-w-xs border-primary/20">
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">Visi Kami</h3>
                            <p className="font-body-md text-body-md text-on-surface italic">
                                "Mewujudkan generasi unggul, berkarakter, disiplin, dan berwawasan teknologi."
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-headline-lg text-headline-lg mb-6">
                            Membangun Masa Depan <br />
                            Melalui Inovasi Digital
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                            SMAN 1 Digital Nusantara adalah sekolah menengah atas modern yang berfokus pada pengembangan teknologi, karakter, dan kualitas pendidikan berbasis digital. Kami percaya bahwa integrasi teknologi dalam kurikulum bukan sekadar alat, melainkan fondasi untuk bersaing di panggung global.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                                <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">verified</span>
                                <div>
                                    <h4 className="font-label-md text-label-md font-bold mb-1">Kurikulum Berbasis Kompetensi</h4>
                                    <p className="font-label-sm text-label-sm text-on-surface-variant">Metode pembelajaran yang mengutamakan pemahaman konsep dan aplikasi praktis.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                                <span className="material-symbols-outlined text-tertiary p-2 bg-tertiary/10 rounded-lg">psychology</span>
                                <div>
                                    <h4 className="font-label-md text-label-md font-bold mb-1">Pengembangan Karakter AI</h4>
                                    <p className="font-label-sm text-label-sm text-on-surface-variant">Integrasi kecerdasan buatan untuk membantu personalisasi karakter siswa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
