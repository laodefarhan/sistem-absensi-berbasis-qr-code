export default function Footer() {
    return (
        <footer className="bg-surface-container-lowest border-t border-outline-variant relative w-full pt-20 pb-10">
            <div className="container mx-auto px-container-padding grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
                <div>
                    <div className="font-headline-md text-headline-md text-primary mb-6 font-bold">Nusantara Digital Edu</div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                        Solusi masa depan untuk sistem pendidikan yang lebih cerdas, transparan, dan terintegrasi.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
                            <span className="material-symbols-outlined">social_leaderboard</span>
                        </a>
                        <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
                            <span className="material-symbols-outlined">photo_camera</span>
                        </a>
                        <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md font-bold mb-6 text-on-surface">Navigasi</h4>
                    <ul className="space-y-3 font-label-sm text-label-sm text-on-surface-variant">
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#about">
                                Tentang Sekolah
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#features">
                                Fitur
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                Informasi
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md font-bold mb-6 text-on-surface">Layanan</h4>
                    <ul className="space-y-3 font-label-sm text-label-sm text-on-surface-variant">
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                Absensi Digital
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                E-Rapor
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                Dashboard Siswa
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-colors" href="#">
                                PPDB Online
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md font-bold mb-6 text-on-surface">Kontak</h4>
                    <ul className="space-y-3 font-label-sm text-label-sm text-on-surface-variant">
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">mail</span> info@sman1dn.sch.id
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">call</span> +62 812 3456 7890
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span> Jakarta, Indonesia
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-container-padding border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">© 2024 Nusantara Digital Edu. All rights reserved.</p>
                <div className="flex gap-6 font-label-sm text-label-sm text-on-surface-variant opacity-60">
                    <a className="hover:text-secondary" href="#">
                        Privacy Policy
                    </a>
                    <a className="hover:text-secondary" href="#">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
