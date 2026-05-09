# Dokumentasi Rebuild Sistem Absensi Berbasis QR Code

Dokumen ini mencatat seluruh perubahan struktur, fitur, dan arsitektur yang telah diterapkan dalam pengembangan ulang sistem ini.

## 1. Arsitektur Database (Multi-Table)
Sistem menggunakan satu database dengan tabel yang terpisah untuk efisiensi dan organisasi data yang lebih baik.

### Tabel Utama:
- **`users`**: Tabel pusat autentikasi (Login).
    - Kolom: `id`, `name`, `email`, `password`, `role`.
    - Peran (Role): `super_admin`, `guru_kepsek`, `satpam`, `siswa`.
    - Status: `active` (Aktif), `inactive` (Tidak Aktif) - **Default: `inactive`**.
- **`students`**: Detail spesifik untuk siswa.
    - Relasi: `user_id` (ke tabel users), `grade_id` (ke tabel grades).
    - Kolom: `uuid`, `nis`, `qr_code`.
- **`teachers`**: Detail spesifik untuk guru.
    - Relasi: `user_id` (ke tabel users).
    - Kolom: `nip`.
- **`grades`**: Manajemen data kelas.
    - Kolom: `name`, `teacher_id` (Wali Kelas).
- **`attendances`**: Catatan kehadiran real-time.
    - Kolom: `student_id`, `scanned_by`, `status`, `recorded_at`.
- **`scores`**: Pencatatan nilai akademik siswa.
    - Kolom: `student_id`, `subject`, `score`, `semester`.

## 2. Fitur Keamanan & Autentikasi
- **Role-Based Access Control (RBAC)**:
    - Implementasi `RoleMiddleware` untuk membatasi akses rute berdasarkan peran pengguna.
    - **Akses Guru**: Guru kini dapat mengakses data siswa dan manajemen nilai.
- **Session Timeout**: Diatur menjadi 30 menit (idle) untuk meningkatkan keamanan.
- **Pelacakan Status Login Otomatis**: 
    - Sistem secara otomatis mengubah status menjadi `active` saat user login.
    - Sistem memaksa perubahan status menjadi `inactive` saat user logout untuk akurasi data "Jajaran Staff".
- **Pembatasan Super Admin**: Sistem hanya mengizinkan pendaftaran **1 akun Super Admin** secara global.

## 3. Sistem QR Code Siswa
Sistem menggunakan alur pendaftaran mandiri yang menghasilkan QR Code terenkripsi.

### Alur Kerja:
1. Siswa mendaftar dengan mengisi form (termasuk NIS).
2. Sistem menghasilkan **UUID unik** untuk siswa tersebut.
3. Data (UUID, NIS, Nama, Email) **dikompresi** (`gzip`) dan **dienkripsi** (`AES-256`) menjadi payload QR.
4. **Login Otomatis**: Setelah daftar, siswa langsung diarahkan ke Dashboard tanpa menampilkan QR Code segera.
5. **Akses Mandiri**: Siswa dapat melihat dan mengunduh QR Code kapan saja melalui menu **QR Saya > Lihat QR** di sidebar maupun melalui **Card "QR Saya"** di halaman utama Dashboard.

## 4. Antarmuka Pengguna (UI/UX) - Update Mei 2026
- **Sidebar Terstruktur**:
    - **Super Admin**: Dashboard, Data Siswa, Guru, Satpam, Kelas, Absensi (Monitoring), **Manajemen QR Code** (Akses semua QR), Nilai, Laporan, Jajaran Staff.
    - **Guru**: Dashboard, Data Siswa, Nilai, Absensi (Scanner).
    - **Satpam**: Dashboard, Scan QR (Absensi), Izin Keluar, Riwayat.
    - **Siswa**: Dashboard, QR Saya (Lihat QR), Absensi Saya, Nilai Saya.
- **Dashboard & Statistik**:
    - **Layout Baru**: Ringkasan angka di bagian atas, visualisasi grafik di bagian bawah.
    - **Satpam Dashboard**: Dashboard khusus dengan Quick Actions (Scan QR, Izin Keluar, Riwayat) untuk akses cepat operasional lapangan.
    - **Siswa Dashboard**: Dashboard personal dengan Quick Actions (QR Saya, Absensi Saya, Nilai Saya) di mana kartu **"QR Saya"** akan membuka modal penampil QR pribadi.
    - **Statistik Lengkap**: Total Siswa, Guru, Satpam, Absensi Hari Ini, Terlambat, Izin Keluar, dan Guru Hadir.
    - **Grafik Interaktif**: Grafik Kehadiran Mingguan (Bar Chart) dan Grafik Kedisiplinan (Line Chart).
- **Pembaruan Fitur Absensi**:
    - **Area Scanner**: Hanya muncul untuk Guru/Satpam. Super Admin hanya menerima data riwayat.
    - **History Detail**: Super Admin dapat melihat riwayat lengkap termasuk kolom Tanggal dan Petugas Scanner.

## 5. Manajemen Data & Laporan
- **Jajaran Staff (Halaman Baru)**:
    - Monitoring status staff secara real-time (Online/Offline).
    - Tabel detail dengan peran dan indikator status warna.
- **Manajemen Laporan & Ekspor**:
    - **Export PDF**: Menggunakan `jsPDF` untuk laporan siap cetak.
    - **Export Excel**: Menggunakan `xlsx` untuk pengolahan data lanjut.
- **Bahasa Indonesia**: Seluruh sistem kini menggunakan Bahasa Indonesia sepenuhnya.

## 6. Akun Pengembangan (Development Credentials)
Berikut adalah daftar akun yang dapat digunakan selama masa pengembangan untuk pengujian tiap peran:

| Peran (Role) | Email | Password | Keterangan |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `superadmin@gmail.com` | `superadmin` | Kendali penuh sistem |
| **Guru / Kepsek** | `guru@gmail.com` | `guruku12` | Akses akademik & absensi QR |
| **Satpam** | `satpam@gmail.com` | `satpam12` | Akses monitoring & scanner |
| **Siswa / i** | `siswa@gmail.com` | `siswa123` | Akses personal & download QR |

---
*Dokumen ini diperbarui terakhir pada Sabtu, 9 Mei 2026.*
