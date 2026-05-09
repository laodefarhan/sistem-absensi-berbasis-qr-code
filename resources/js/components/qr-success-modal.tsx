import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';

interface QRSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    qrPayload: string;
    userName: string;
}

export function QRSuccessModal({ isOpen, onClose, qrPayload, userName }: QRSuccessModalProps) {
    const qrRef = useRef<SVGSVGElement>(null);

    const downloadQR = () => {
        const svg = qrRef.current;
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width + 40;
            canvas.height = img.height + 100;
            if (ctx) {
                // Background
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw QR
                ctx.drawImage(img, 20, 20);
                
                // Add Text
                ctx.fillStyle = 'black';
                ctx.font = 'bold 16px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(userName, canvas.width / 2, img.height + 50);
                ctx.font = '12px sans-serif';
                ctx.fillText('QR Code Absensi Siswa', canvas.width / 2, img.height + 75);

                const pngFile = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.download = `QR_Absensi_${userName.replace(/\s+/g, '_')}.png`;
                downloadLink.href = pngFile;
                downloadLink.click();
            }
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>QR Code Absensi</DialogTitle>
                    <DialogDescription>
                        Gunakan QR Code di bawah ini untuk melakukan absensi di sekolah.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg">
                    <QRCodeSVG
                        ref={qrRef}
                        value={qrPayload}
                        size={256}
                        level="H"
                        includeMargin={true}
                    />
                    <div className="text-center">
                        <p className="font-bold text-lg text-black">{userName}</p>
                        <p className="text-sm text-gray-500">Siswa / i</p>
                    </div>
                </div>
                <DialogFooter className="flex sm:justify-between items-center gap-4">
                    <Button variant="outline" onClick={onClose}>
                        Nanti Saja
                    </Button>
                    <Button onClick={downloadQR} className="gap-2">
                        <Download className="h-4 w-4" />
                        Download QR Code
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
