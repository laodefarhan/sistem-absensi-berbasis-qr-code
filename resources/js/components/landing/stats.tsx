export default function Stats() {
    return (
        <section className="py-12 bg-surface-container-lowest relative z-20">
            <div className="container mx-auto px-container-padding">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                    <div className="text-center p-6 border-r border-white/5 last:border-0">
                        <div className="font-display text-display-lg text-primary mb-2">1200+</div>
                        <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Siswa</div>
                    </div>
                    <div className="text-center p-6 border-r border-white/5 last:border-0">
                        <div className="font-display text-display-lg text-primary mb-2">80+</div>
                        <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Guru</div>
                    </div>
                    <div className="text-center p-6 border-r border-white/5 last:border-0">
                        <div className="font-display text-display-lg text-primary mb-2">A</div>
                        <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Akreditasi</div>
                    </div>
                    <div className="text-center p-6 border-r border-white/5 last:border-0">
                        <div className="font-display text-display-lg text-primary mb-2">40</div>
                        <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Kelas</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
