export default function Testimonials() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div>
                        <span className="font-label-md tracking-widest text-primary uppercase">Apa Kata Mereka</span>
                        <h2 className="mt-4 mb-8 font-headline text-headline-lg">Dipercaya Oleh Ribuan Pengguna</h2>
                        <div className="space-y-6">
                            <div className="glass-card border-l-4 border-l-primary rounded-2xl p-6">
                                <p className="mb-4 font-body-md italic text-on-surface-variant">"Sistem ini sangat membantu kami memantau kehadiran siswa secara real-time. Orang tua juga merasa lebih tenang karena ada notifikasi langsung."</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-12 w-12 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCalKdLeOVt4lPEwARd_8w8G-TzXKIM4jU28MuW_httfHAxD8QPM0v_fmQWwPLB_uHPyOj5iMLbnOoOO846bahfT767d6oWlz0b2BzB_rN1hfZI2duc7wNI2914o1IV4Etj-vpHercULVaEg86bA7vlICPOG3cFxvkIpG2p8Yv83PLWJTHwis0aG3dzJd2Z84ODvau9QrVGrJ23lL5xajmtHYCzLrfOqtHAoxYgXXToKyYqM1z54XlXfDTBKRG4wJAbdcj16xmiL3Y"
                                        alt="Drs. H. Ahmad Fauzi"
                                    />
                                    <div>
                                        <div className="font-bold text-on-surface">Drs. H. Ahmad Fauzi</div>
                                        <div className="text-sm text-on-surface-variant">Kepala Sekolah</div>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-card border-l-4 border-l-secondary rounded-2xl p-6">
                                <p className="mb-4 font-body-md italic text-on-surface-variant">"Aplikasinya sangat user-friendly. Tidak pernah ada kendala saat melakukan scan setiap pagi."</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-12 w-12 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9HevKeeJHldC3b8wR7lBKfj-ziA4ihE0sgTSa6xH_f8MTXTqQSJ8XIsg1nCuI8jZen9lrEIORJ4QBwGiWK1G9G13BYiy1kIFc7DL2JFPelao_vbXx5mFJqaFhtIfkAhgX7XeoqRaz2BzxmKXLSG-NmC1KhDjfSPXJYqnKb3snFCLoeP_IwxcDBrP-aEwEf2V8YLQGYtF89d666L1hABHmVyJsoAgO2zBLCPWvLme0JumISN7tr0gr2liVSsQDnqPMKjXoupKBDOQ"
                                        alt="Siti Sarah"
                                    />
                                    <div>
                                        <div className="font-bold text-on-surface">Siti Sarah</div>
                                        <div className="text-sm text-on-surface-variant">Siswa Kelas XI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="glass-card relative h-[500px] w-full overflow-hidden border-white/5 rounded-3xl">
                            <img
                                className="h-full w-full object-cover opacity-50"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSd2cfhC5PXKdjs5msEof90tdI02yVQWKl5t6N4vBgmpJMnOrtmbUum4MOK5QrVNU79Nf8U9JyE7FPf1yyGS5p031P-UGf3nN5NXxmtdkDHOEA2RsA96WenmyVuhjnw0uA6X00b9711gjW1npaPb9cN3NL_NyOXWlCWtmm3E2DHb5529QHN5O6lvGX9mdxc4KOoOz_56LEI9RJOEcoZR4m6Q3kUXM2qcbDWHx6VBEbb7U6VjxdBC6Dsju46DlbLfA3J-NEfc1J0Q"
                                alt="Students using digital platform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                            <div className="glass-card absolute bottom-8 left-8 right-8 rounded-2xl p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <h4 className="font-headline text-headline-md">Skor Kepuasan 4.9/5.0</h4>
                                <p className="text-sm text-on-surface-variant">Dari 100+ Sekolah yang menggunakan platform kami.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
