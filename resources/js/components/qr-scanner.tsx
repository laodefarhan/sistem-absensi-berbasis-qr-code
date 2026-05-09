import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

interface QRScannerProps {
    onScanSuccess: (decodedText: string) => void;
    onScanFailure?: (error: string) => void;
}

export function QRScanner({ onScanSuccess, onScanFailure }: QRScannerProps) {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            'qr-reader',
            { fps: 10, qrbox: { width: 250, height: 250 } },
            /* verbose= */ false
        );

        scanner.render(onScanSuccess, onScanFailure);

        return () => {
            scanner.clear().catch((error) => {
                console.error('Failed to clear html5QrcodeScanner. ', error);
            });
        };
    }, [onScanSuccess, onScanFailure]);

    return (
        <div className="overflow-hidden rounded-lg border bg-background p-4">
            <div id="qr-reader" className="w-full"></div>
        </div>
    );
}
