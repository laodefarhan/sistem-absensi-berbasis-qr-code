import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { QRScanner } from '@/components/qr-scanner';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CalendarCheck, QrCode, History } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner'; 

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Absensi',
        href: '/absensi',
    },
];

interface Attendance {
    id: number;
    recorded_at: string;
    student: {
        user: {
            name: string;
        };
        nis: string;
        grade?: {
            name: string;
        };
    };
    scanner?: {
        name: string;
    };
}

export default function AttendanceIndex({ attendances }: { attendances: Attendance[] }) {
    const { auth } = usePage<SharedData>().props;
    const isSuperAdmin = auth.user.role === 'super_admin';
    const [isScanning, setIsScanning] = useState(true);

    const handleScanSuccess = async (decodedText: string) => {
        setIsScanning(false); 
        try {
            const response = await axios.post(route('attendance.scan'), { payload: decodedText });
            if (response.data.success) {
                alert(response.data.message);
                window.location.reload(); 
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data?.message || 'Gagal melakukan absensi.');
            } else {
                alert('Gagal melakukan absensi.');
            }
        } finally {
            setTimeout(() => setIsScanning(true), 2000);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Absensi QR" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 overflow-x-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <CalendarCheck className="h-6 w-6" />
                            {isSuperAdmin ? 'Monitoring Absensi Siswa' : 'Sistem Absensi Real-time'}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {isSuperAdmin 
                                ? 'Memantau seluruh riwayat kehadiran siswa yang telah diinput.' 
                                : 'Scan QR Code siswa untuk mencatat kehadiran.'}
                        </p>
                    </div>
                </div>

                <div className={`grid gap-6 ${isSuperAdmin ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                    {/* Scanner Section - Hidden for Super Admin */}
                    {!isSuperAdmin && (
                        <div className="space-y-4">
                            <div className="bg-card border rounded-xl p-4 shadow-sm">
                                <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                                    <QrCode className="h-5 w-5" />
                                    <span>Area Scanner</span>
                                </div>
                                {isScanning ? (
                                    <QRScanner onScanSuccess={handleScanSuccess} />
                                ) : (
                                    <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg border-2 border-dashed">
                                        <p className="text-muted-foreground animate-pulse">Memproses Data...</p>
                                    </div>
                                )}
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    Pastikan QR Code berada di tengah kotak kamera.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* History Section */}
                    <div className="space-y-4">
                        <div className="bg-card border rounded-xl p-4 shadow-sm h-full">
                            <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                                <History className="h-5 w-5" />
                                <span>{isSuperAdmin ? 'Seluruh Riwayat Absensi' : 'History Absensi Hari Ini'}</span>
                            </div>
                            <div className="rounded-md border overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-muted/50">
                                        <TableRow>
                                            <TableHead>Siswa</TableHead>
                                            <TableHead>Kelas</TableHead>
                                            <TableHead>Waktu</TableHead>
                                            {isSuperAdmin && <TableHead>Tanggal</TableHead>}
                                            {isSuperAdmin && <TableHead>Oleh</TableHead>}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attendances.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={isSuperAdmin ? 5 : 3} className="text-center py-10 text-muted-foreground italic">
                                                    Belum ada aktivitas absensi.
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            attendances.map((att) => (
                                                <TableRow key={att.id}>
                                                    <TableCell className="font-medium">
                                                        {att.student.user.name}
                                                        <div className="text-[10px] text-muted-foreground font-mono">{att.student.nis}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline">{att.student.grade?.name || 'N/A'}</Badge>
                                                    </TableCell>
                                                    <TableCell className="text-xs font-mono">
                                                        {new Date(att.recorded_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                                                    </TableCell>
                                                    {isSuperAdmin && (
                                                        <TableCell className="text-xs">
                                                            {new Date(att.recorded_at).toLocaleDateString('id-ID')}
                                                        </TableCell>
                                                    )}
                                                    {isSuperAdmin && (
                                                        <TableCell className="text-[10px] font-medium italic">
                                                            {att.scanner?.name || 'Sistem'}
                                                        </TableCell>
                                                    )}
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
