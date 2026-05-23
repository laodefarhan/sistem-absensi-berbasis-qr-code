import About from '@/components/landing/about';
import CTA from '@/components/landing/cta';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import Navbar from '@/components/landing/navbar';
import Testimonials from '@/components/landing/testimonials';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {
        // Micro-interactions and atmospheric effects for glass-cards
        const handleMouseMove = (e: MouseEvent) => {
            const card = (e.target as HTMLElement).closest('.glass-card') as HTMLElement;
            if (card) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Simple scroll reveal
        const handleScroll = () => {
            const reveals = document.querySelectorAll('section');
            reveals.forEach((reveal) => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('opacity-100');
                    reveal.classList.remove('opacity-0');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize sections for reveal animation
        document.querySelectorAll('section').forEach((s) => {
            s.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
        });

        // Trigger scroll once on mount to show visible sections
        handleScroll();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Head title="SMAN 1 Digital Nusantara | Masa Depan Pendidikan" />

            <div className="bg-background text-on-surface font-sans selection:bg-primary/30 selection:text-primary">
                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Features />
                    <HowItWorks />
                    <Testimonials />
                    <CTA />
                </main>

                <Footer />
            </div>
        </>
    );
}
