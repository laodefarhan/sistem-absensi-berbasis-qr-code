import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import { 
    Users, 
    GraduationCap, 
    ShieldCheck, 
    CalendarCheck, 
    Clock, 
    LogOut, 
    UserCheck,
    BarChart,
    QrCode,
    History,
    FileSpreadsheet,
    ClipboardCheck
} from 'lucide-react';
import { 
    BarChart as ReBarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    LineChart,
    Line,
    Legend
} from 'recharts';
import { useState, useEffect } from 'react';
import { QRSuccessModal } from '@/components/qr-success-modal';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { auth, stats } = usePage().props as any;
    const [showQRModal, setShowQRModal] = useState(false);

    const isSuperAdmin = auth.user.role === 'super_admin';

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('show_qr') === 'true' && auth.user.role === 'siswa') {
            setShowQRModal(true);
        }
    }, []);

    const handleCloseQR = () => {
        setShowQRModal(false);
        // Remove query param without reload
        const url = new URL(window.location.href);
        url.searchParams.delete('show_qr');
        window.history.replaceState({}, '', url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {auth.user.role === 'siswa' && auth.student && (
                <QRSuccessModal 
                    isOpen={showQRModal} 
                    onClose={handleCloseQR} 
                    qrPayload={auth.student.qr_code} 
                    userName={auth.user.name} 
                />
            )}

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 overflow-x-auto">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold">Selamat Datang, {auth.user.name}</h1>
                    <p className="text-muted-foreground capitalize">Peran: {auth.user.role.replace('_', ' ')}</p>
                </div>

                {isSuperAdmin && stats && (
                    <>
                        {/* SEMUA STATISTIK (BAGIAN ATAS) */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {/* Total Siswa */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
                                    <GraduationCap className="h-4 w-4 text-blue-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.total_students}</div>
                                    <p className="text-xs text-muted-foreground text-blue-600 font-medium">Siswa terdaftar</p>
                                </CardContent>
                            </Card>

                            {/* Total Guru */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Guru</CardTitle>
                                    <Users className="h-4 w-4 text-purple-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.total_teachers}</div>
                                    <p className="text-xs text-muted-foreground text-purple-600 font-medium">Tenaga pendidik</p>
                                </CardContent>
                            </Card>

                            {/* Total Satpam */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Satpam</CardTitle>
                                    <ShieldCheck className="h-4 w-4 text-orange-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats.total_security}</div>
                                    <p className="text-xs text-muted-foreground text-orange-600 font-medium">Staf keamanan</p>
                                </CardContent>
                            </Card>

                            {/* Absensi Hari Ini */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Absensi Hari Ini</CardTitle>
                                    <CalendarCheck className="h-4 w-4 text-green-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-green-600">{stats.attendance_today}</div>
                                    <p className="text-xs text-muted-foreground text-green-600 font-medium">Siswa sudah hadir</p>
                                </CardContent>
                            </Card>

                            {/* Siswa Terlambat */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Siswa Terlambat</CardTitle>
                                    <Clock className="h-4 w-4 text-red-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-red-600">{stats.late_students}</div>
                                    <p className="text-xs text-muted-foreground text-red-600 font-medium">Perlu perhatian</p>
                                </CardContent>
                            </Card>

                            {/* Izin Keluar */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Siswa Izin Keluar</CardTitle>
                                    <LogOut className="h-4 w-4 text-yellow-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-yellow-600">{stats.out_permission}</div>
                                    <p className="text-xs text-muted-foreground text-yellow-600 font-medium">Meninggalkan sekolah</p>
                                </CardContent>
                            </Card>

                            {/* Guru Hadir */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Guru Hadir</CardTitle>
                                    <UserCheck className="h-4 w-4 text-teal-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-teal-600">{stats.teachers_present}</div>
                                    <p className="text-xs text-muted-foreground text-teal-600 font-medium">Aktif mengajar</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* SEMUA GRAFIK (BAGIAN BAWAH) */}
                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Grafik Kehadiran Mingguan */}
                            <Card className="col-span-1">
                                <CardHeader>
                                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                                        <BarChart className="h-4 w-4 text-green-600" />
                                        Grafik Kehadiran Mingguan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px] w-full mt-4">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <ReBarChart data={stats.weekly_data}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                                <YAxis axisLine={false} tickLine={false} />
                                                <Tooltip />
                                                <Bar dataKey="hadir" fill="#16a34a" radius={[4, 4, 0, 0]} name="Kehadiran" />
                                            </ReBarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Grafik Keterlambatan & Izin */}
                            <Card className="col-span-1">
                                <CardHeader>
                                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                                        <BarChart className="h-4 w-4 text-red-600" />
                                        Grafik Keterlambatan & Izin Keluar
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px] w-full mt-4">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={stats.weekly_data}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                                <YAxis axisLine={false} tickLine={false} />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="lambat" stroke="#dc2626" name="Keterlambatan" strokeWidth={2} dot={{ r: 4 }} />
                                                <Line type="monotone" dataKey="izin" stroke="#ca8a04" name="Izin Keluar" strokeWidth={2} dot={{ r: 4 }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
                
                {auth.user.role === 'satpam' && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('attendance.index')}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Scan QR Kehadiran</CardTitle>
                                <QrCode className="h-4 w-4 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Mulai Scan</div>
                                <p className="text-xs text-muted-foreground">Absensi masuk siswa hari ini</p>
                            </CardContent>
                        </Card>

                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('attendance.exit-permit')}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Izin Keluar</CardTitle>
                                <LogOut className="h-4 w-4 text-yellow-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Catat Izin</div>
                                <p className="text-xs text-muted-foreground">Scan QR untuk izin keluar sekolah</p>
                            </CardContent>
                        </Card>

                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('attendance.index')}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Riwayat Hari Ini</CardTitle>
                                <History className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Lihat History</div>
                                <p className="text-xs text-muted-foreground">Total absensi yang sudah discan</p>
                            </CardContent>
                        </Card>
                    </div>
                )}
                
                {auth.user.role === 'siswa' && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('dashboard', { show_qr: 'true' })}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">QR Saya</CardTitle>
                                <QrCode className="h-4 w-4 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Lihat QR</div>
                                <p className="text-xs text-muted-foreground">Tampilkan QR Code untuk absensi</p>
                            </CardContent>
                        </Card>

                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('student.attendance')}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Absensi Saya</CardTitle>
                                <ClipboardCheck className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Cek Kehadiran</div>
                                <p className="text-xs text-muted-foreground">Lihat riwayat absensi masuk/keluar</p>
                            </CardContent>
                        </Card>

                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => window.location.href = route('student.scores')}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Nilai Saya</CardTitle>
                                <FileSpreadsheet className="h-4 w-4 text-orange-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Lihat Nilai</div>
                                <p className="text-xs text-muted-foreground">Cek hasil nilai tugas dan ujian</p>
                            </CardContent>
                        </Card>
                    </div>
                )}
                
                {auth.user.role === 'guru_kepsek' && (
                    <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed p-8">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold">Selamat Bekerja!</h3>
                            <p className="text-muted-foreground">Silakan pilih menu di samping untuk memulai.</p>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
