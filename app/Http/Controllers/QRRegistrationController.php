<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;

class QRRegistrationController extends Controller
{
    /**
     * Decrypt and decompress student data from QR code.
     */
    public function decrypt(Request $request)
    {
        $request->validate([
            'payload' => 'required|string',
        ]);

        try {
            // 1. Decrypt using Laravel's Crypt (AES-256-CBC/GCM)
            $decrypted = Crypt::decryptString($request->payload);

            // 2. Decompress using gzuncompress (since we will use gzcompress for encoding)
            // Note: In a real scenario, we might use base64 encoding for the compressed binary data
            $decompressed = gzuncompress(base64_decode($decrypted));

            if (!$decompressed) {
                throw new \Exception('Failed to decompress data.');
            }

            $data = json_decode($decompressed, true);

            return response()->json([
                'success' => true,
                'data' => $data
            ]);
        } catch (\Exception $e) {
            Log::error('QR Decryption failed: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Invalid or corrupted QR code data.'
            ], 422);
        }
    }

    /**
     * Helper to generate a secure QR payload for testing/admin use.
     * Use this to generate the QR codes that students will scan.
     */
    public function generatePayload(Request $request)
    {
        $request->validate([
            'uuid' => 'required|uuid',
            'nis' => 'required|string',
            'user_id' => 'required|integer',
            'name' => 'required|string',
            'email' => 'required|email',
        ]);

        $jsonData = json_encode($request->only(['uuid', 'nis', 'user_id', 'name', 'email']));
        
        // 1. Compress
        $compressed = base64_encode(gzcompress($jsonData, 9));
        
        // 2. Encrypt
        $encrypted = Crypt::encryptString($compressed);

        return response()->json([
            'payload' => $encrypted
        ]);
    }
}
