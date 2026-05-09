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
import { QrCode, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen QR Code',
        href: '/qr-code',
    },
];

export default function QRCodeIndex({ students }: { students: any[] }) {
    const downloadQR = (studentName: string, id: string) => {
        const svg = document.getElementById(id) as any;
        if (!svg) return;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `QR_${studentName.replace(/\s+/g, '_')}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="QR Code Siswa" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <QrCode className="h-6 w-6" />
                        Manajemen QR Code Siswa
                    </h1>
                    <p className="text-muted-foreground text-sm">Lihat dan unduh kembali QR Code siswa terdaftar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <div key={student.id} className="bg-card border rounded-xl p-6 flex flex-col items-center gap-4 shadow-sm">
                            <div className="bg-white p-2 rounded-lg border">
                                <QRCodeSVG 
                                    id={`qr-${student.id}`}
                                    value={student.qr_code || ''} 
                                    size={160}
                                />
                            </div>
                            <div className="text-center">
                                <p className="font-bold">{student.name}</p>
                                <p className="text-xs text-muted-foreground">{student.grade} | {student.nis}</p>
                            </div>
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full gap-2"
                                onClick={() => downloadQR(student.name, `qr-${student.id}`)}
                            >
                                <Download className="h-4 w-4" /> Download
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
