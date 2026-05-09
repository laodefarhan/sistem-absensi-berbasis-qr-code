import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, Download, FileSpreadsheet, Users, CalendarCheck, TrendingDown } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Laporan',
        href: '/laporan',
    },
];

interface ReportProps {
    stats: {
        total_students: number;
        present_today: number;
        absence_rate: number;
    };
    gradeReports: Array<{
        name: string;
        total: number;
        present: number;
    }>;
    attendanceHistory: Array<{
        id: number;
        name: string;
        grade: string;
        time: string;
        date: string;
        status: string;
    }>;
}

export default function ReportIndex({ stats, gradeReports, attendanceHistory }: ReportProps) {
    
    const exportToPDF = () => {
        const doc = new jsPDF();
        const dateStr = new Date().toLocaleDateString('id-ID');
        
        doc.text('Laporan Absensi Siswa', 14, 15);
        doc.setFontSize(10);
        doc.text(`Tanggal Cetak: ${dateStr}`, 14, 22);
        
        const tableData = attendanceHistory.map((item, index) => [
            index + 1,
            item.name,
            item.grade,
            item.date,
            item.time,
            item.status
        ]);
        
        autoTable(doc, {
            head: [['No', 'Nama Siswa', 'Kelas', 'Tanggal', 'Waktu', 'Status']],
            body: tableData,
            startY: 30,
        });
        
        doc.save(`Laporan_Absensi_${dateStr.replace(/\//g, '-')}.pdf`);
    };

    const exportToExcel = () => {
        const dateStr = new Date().toLocaleDateString('id-ID');
        const worksheet = XLSX.utils.json_to_sheet(attendanceHistory.map((item, index) => ({
            'No': index + 1,
            'Nama Siswa': item.name,
            'Kelas': item.grade,
            'Tanggal': item.date,
            'Waktu': item.time,
            'Status': item.status
        })));
        
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Absensi');
        XLSX.writeFile(workbook, `Laporan_Absensi_${dateStr.replace(/\//g, '-')}.xlsx`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Laporan" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 overflow-x-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <BarChart3 className="h-6 w-6" />
                            Manajemen Laporan Absensi
                        </h1>
                        <p className="text-muted-foreground text-sm">Lihat statistik, riwayat kehadiran, dan ekspor data laporan.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" onClick={exportToExcel} className="gap-2">
                            <FileSpreadsheet className="h-4 w-4" /> Excel
                        </Button>
                        <Button variant="outline" onClick={exportToPDF} className="gap-2 text-red-600 border-red-200 hover:bg-red-50">
                            <FileText className="h-4 w-4" /> PDF
                        </Button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_students}</div>
                            <p className="text-xs text-muted-foreground">Siswa terdaftar</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Hadir Hari Ini</CardTitle>
                            <CalendarCheck className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.present_today}</div>
                            <p className="text-xs text-muted-foreground">Siswa sudah absen</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tingkat Ketidakhadiran</CardTitle>
                            <TrendingDown className="h-4 w-4 text-red-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{stats.absence_rate}%</div>
                            <p className="text-xs text-muted-foreground">Persentase tidak hadir</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Grade-based reports */}
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle className="text-lg">Ringkasan Per Kelas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {gradeReports.map((grade) => (
                                    <div key={grade.name} className="flex flex-col gap-1">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium">{grade.name}</span>
                                            <span>{grade.present} / {grade.total}</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-primary" 
                                                style={{ width: `${(grade.present / grade.total) * 100 || 0}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Attendance History */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-lg">Riwayat Absensi Terkini</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nama Siswa</TableHead>
                                            <TableHead>Kelas</TableHead>
                                            <TableHead>Waktu</TableHead>
                                            <TableHead className="text-right">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attendanceHistory.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                                                    Belum ada data absensi hari ini.
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            attendanceHistory.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell className="font-medium">{item.name}</TableCell>
                                                    <TableCell>{item.grade}</TableCell>
                                                    <TableCell>{item.time}</TableCell>
                                                    <TableCell className="text-right">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                            {item.status}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
