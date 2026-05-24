import { Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const floatingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!floatingRef.current) return;
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            floatingRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd1YoorgBcEjq6YpUOCESrWkOmSUmFF8BOwHu88ok5Q-O6gCsj0PFccBS_G1XEmh4HzxPyaUJGHyPkWo-KVtlZWpm-A1toHoUg4RYJL8warcDzfcbGAMXXaDIdDnAM8Dc4Im1PGJV0T85Ft7fcb_kgOd2BO_BTnTaiSkYAN727elTefuYZve4zg8qYYmLtncJ6Uf-nwwOxQPxAm24k-9pm6QwLiTe2ZkbDYOKxh1BAfaeDI1mJYDFgt6IOnYhaak2wKk2nX13M8arp"
                />
            </div>
            <div className="container mx-auto px-container-padding relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    Future of Learning
                </div>
                <h1 className="font-display text-display-lg mb-6 max-w-4xl mx-auto glow-text">
                    Membangun Generasi Unggul di Era <span className="text-primary">Digital Nusantara</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                    Platform pendidikan terintegrasi yang menggabungkan teknologi AI, transparansi data, dan kenyamanan belajar untuk mencetak pemimpin masa depan.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                        Mulai Belajar <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/20 backdrop-blur-md rounded-xl font-headline-md text-headline-md hover:bg-white/5 transition-all">
                        Lihat Fitur
                    </button>
                </div>
            </div>
            {/* Floating Stat Cards (Visual Only) */}
            <div ref={floatingRef} className="absolute top-1/4 right-10 hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                bolt
                            </span>
                        </div>
                        <div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant">Real-time Absensi</div>
                            <div className="font-headline-md text-headline-md">100% Aktif</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
