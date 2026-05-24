import About from '@/components/landing/about';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/navbar';
import Stats from '@/components/landing/stats';
import Testimonials from '@/components/landing/testimonials';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {
        // Simple scroll reveal
        const handleScroll = () => {
            const reveals = document.querySelectorAll('section');
            reveals.forEach((reveal) => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('opacity-100', 'translate-y-0');
                    reveal.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize sections for reveal animation
        document.querySelectorAll('section').forEach((s) => {
            s.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        });

        // Trigger scroll once on mount
        setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Head title="SMAN 1 Digital Nusantara | Smart School Ecosystem" />

            <div className="bg-background text-on-surface font-sans selection:bg-primary/30 selection:text-primary">
                <Navbar />

                <main>
                    <Hero />
                    <Stats />
                    <About />
                    <Features />
                    <Testimonials />
                </main>

                <Footer />
            </div>
        </>
    );
}
