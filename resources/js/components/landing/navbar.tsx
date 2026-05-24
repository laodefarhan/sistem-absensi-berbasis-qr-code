import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 flex justify-between items-center px-container-padding transition-all duration-300 border-b border-white/10 ${
                scrolled ? 'bg-surface/80 h-14 backdrop-blur-xl' : 'bg-surface/40 h-16 backdrop-blur-xl'
            }`}
        >
            <div className="font-display text-headline-md font-bold text-primary">Nusantara Digital Edu</div>
            <div className="hidden md:flex gap-8 items-center">
                <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-200" href="#">
                    Beranda
                </a>
                <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#about">
                    Tentang Sekolah
                </a>
                <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#features">
                    Fitur
                </a>
                <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#workflow">
                    Informasi
                </a>
                <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-200" href="#contact">
                    Kontak
                </a>
            </div>
            <Link
                href={route('login')}
                className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-label-md text-label-md active:scale-95 transition-transform"
            >
                Login
            </Link>
        </nav>
    );
}
