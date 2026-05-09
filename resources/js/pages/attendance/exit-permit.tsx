import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { LogOut, QrCode } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Izin Keluar',
        href: '/izin-keluar',
    },
];

export default function ExitPermit() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Izin Keluar" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <LogOut className="h-6 w-6" />
                            Izin Keluar Siswa
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Scan QR Code siswa untuk mencatat izin keluar sekolah.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="bg-card border rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                                <QrCode className="h-5 w-5" />
                                <span>Area Scanner Izin Keluar</span>
                            </div>
                            <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg border-2 border-dashed">
                                <p className="text-muted-foreground italic">Fitur Scan Izin Keluar Segera Hadir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
