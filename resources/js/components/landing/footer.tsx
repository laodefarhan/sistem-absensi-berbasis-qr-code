export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-surface-container-lowest pt-20 pb-10">
            <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
                <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6 font-headline text-headline-md font-bold text-primary">SMAN 1 Digital</div>
                        <p className="text-sm leading-relaxed text-on-surface-variant">
                            Platform manajemen sekolah modern yang berfokus pada integrasi teknologi untuk menciptakan ekosistem pendidikan yang lebih baik.
                        </p>
                    </div>
                    <div>
                        <h5 className="mb-6 font-bold">Navigasi</h5>
                        <ul className="space-y-4 text-sm text-on-surface-variant">
                            <li><a className="transition-colors hover:text-primary" href="#">Tentang Kami</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">Kurikulum</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">PPDB Digital</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">Galeri</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-6 font-bold">Bantuan</h5>
                        <ul className="space-y-4 text-sm text-on-surface-variant">
                            <li><a className="transition-colors hover:text-primary" href="#">Pusat Bantuan</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">Kebijakan Privasi</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">Syarat & Ketentuan</a></li>
                            <li><a className="transition-colors hover:text-primary" href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-6 font-bold">Kontak Kami</h5>
                        <ul className="space-y-4 text-sm text-on-surface-variant">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined mt-1 text-sm text-primary">location_on</span>
                                <span>Jl. Pendidikan Digital No. 01, Jakarta Selatan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-sm text-primary">mail</span>
                                <span>info@sman1digital.sch.id</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-sm text-primary">call</span>
                                <span>(021) 555-0123</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[12px] tracking-widest text-on-surface-variant uppercase md:flex-row">
                    <p>© 2024 SMAN 1 Digital Nusantara. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="transition-colors hover:text-secondary" href="#">Instagram</a>
                        <a className="transition-colors hover:text-secondary" href="#">YouTube</a>
                        <a className="transition-colors hover:text-secondary" href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
