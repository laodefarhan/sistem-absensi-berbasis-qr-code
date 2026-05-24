export default function Testimonials() {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-container-padding">
                <h2 className="font-headline-lg text-headline-lg text-center mb-16">Apa Kata Mereka?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC41ax8j5kbnA1IFsxetd5OIMAXApg7mycn_akuHW235pF5fOQEDybO1WAHLqxIeshtjODkDKOW9LgwzYPsvwFaOrg_GH-VZyeU47Ve1vlEZ8aUTlsZvnd1ol0zjC4By-oG3Cmlh_FrSdC0PSnIYGo93FhJ4JAXKEUYN0blBbYyzB2_P285y4gdGNSB72iloZvNXMLGr8MC9o2gvMO-ugFVngcbPr6rO_cTtvMDzVAJZay9-dk2qd5zVjecUfkd3yY_75jZ9uqgB7vT"
                            />
                            <div>
                                <div className="font-label-md text-label-md font-bold">Budi Santoso</div>
                                <div className="font-label-sm text-label-sm text-on-surface-variant">Orang Tua Siswa</div>
                            </div>
                        </div>
                        <p className="font-body-md text-body-md italic text-on-surface-variant">
                            "Sistem WhatsApp notification sangat membantu saya memantau kehadiran anak saya setiap hari tanpa harus menelepon sekolah."
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border-primary/30 shadow-[0_0_20px_rgba(79,70,229,0.1)] scale-105">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU58qleVDyXqsGTs1AvQ8wcb-0ynMs-QFHPWI1FoYtk3hq5a5yambI8Pa78NhYBYIOL72qTZeYfRwrRKt4D5EAdtONE5UyKCo9fb4ARtex3WoK8soN-_9dDP7gQxAw58sUClaHwS0xuhQUCMOKLJYjK9We202YQTzsgBPlS7-yc9G-hXTfrQNxwEWmTLQiYSws0Vv5mo7DElQl9vSCuy7s7sML7A0Cx9pUIDDyjcOA1umcD-BtlKCznQC6Uj46Ar8B_zr_kQLXXe21"
                            />
                            <div>
                                <div className="font-label-md text-label-md font-bold">Siti Aisyah</div>
                                <div className="font-label-sm text-label-sm text-on-surface-variant">Siswa Kelas XII</div>
                            </div>
                        </div>
                        <p className="font-body-md text-body-md italic text-on-surface-variant">
                            "Belajar jadi jauh lebih seru dengan dashboard yang interaktif. Semua materi dan tugas terorganisir dengan sangat baik."
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn_PvJUSjjLFsJeH9S7z-2aTMO-1c4YHel5GBLYIWqtQZMmDiRnM2KzQh192z-urAZeXGyic0NmoTMFRUzc-NWw0_dVbtIpD5-r1ens4eEHa0WQ8I6vApoErk3UCzM8ay0aR5v0HSnMHkddaHEcMakwh4Sm4pwUYe-DTLpHhSWzPt7qFnp81GLMsPj2hpTVhc2ai0BupCHA-K3KEwMtCVuwci6-A5dPAjwVQ_XCAxegRe18ZaqTdFTqDd8yzfVl2SdtfgIM4HnR1Xs"
                            />
                            <div>
                                <div className="font-label-md text-label-md font-bold">Dr. Ratna Sari</div>
                                <div className="font-label-sm text-label-sm text-on-surface-variant">Kepala Sekolah</div>
                            </div>
                        </div>
                        <p className="font-body-md text-body-md italic text-on-surface-variant">
                            "Digitalisasi ini membawa efisiensi kerja yang luar biasa bagi staf pengajar dan transparansi bagi seluruh pemangku kepentingan."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
