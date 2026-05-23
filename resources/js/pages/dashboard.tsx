import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-sidebar-accent/40 p-6 backdrop-blur-sm transition-all hover:bg-sidebar-accent/60">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Selamat Datang</span>
                            <h3 className="text-2xl font-bold tracking-tight">Sistem Absensi QR</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Gunakan menu di samping untuk mengakses fitur sistem absensi.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-video rounded-xl border border-sidebar-border/70 bg-sidebar-accent/40" />
                    <div className="aspect-video rounded-xl border border-sidebar-border/70 bg-sidebar-accent/40" />
                </div>
                <div className="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 bg-sidebar-accent/40 p-6 backdrop-blur-sm md:min-h-min">
                    <div className="flex items-center justify-between border-b border-sidebar-border/70 pb-4 mb-6">
                        <h2 className="text-xl font-semibold">Aktivitas Terbaru</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                        <div className="rounded-full bg-sidebar-accent p-4 mb-4">
                            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground">Belum ada aktivitas terbaru untuk ditampilkan.</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
