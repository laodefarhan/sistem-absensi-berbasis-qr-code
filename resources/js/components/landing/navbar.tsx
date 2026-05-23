import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-surface-dim/60 px-margin-mobile backdrop-blur-xl saturate-[180%] shadow-sm md:px-margin-desktop">
            <div className="flex items-center gap-2">
                <span className="font-headline text-headline-md font-bold text-primary">SMAN 1 Digital</span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
                <a className="border-b-2 border-primary pb-1 font-body-md text-body-md text-primary transition-all duration-300" href="#home">Home</a>
                <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary" href="#about">Features</a>
                <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary" href="#academics">Academics</a>
                <a className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary" href="#support">Support</a>
            </div>
            <div className="flex items-center gap-4">
                <button className="hidden font-label-md text-label-md text-on-surface-variant transition-colors hover:text-secondary md:block">Contact Us</button>
                <Link
                    href={route('login')}
                    className="rounded-full bg-primary px-6 py-2 font-label-md text-label-md text-on-primary transition-all duration-300 hover:bg-primary-container"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
