import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { 
    Table, 
    TableBody, 
    TableCaption, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, UserCheck, UserX, GraduationCap } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Siswa',
        href: '/data-siswa',
    },
];

interface StudentData {
    id: number;
    name: string;
    email: string;
    status: string;
    nis: string;
    uuid: string;
    created_at: string;
}

export default function StudentIndex({ students }: { students: StudentData[] }) {
    const toggleStatus = (id: number) => {
        if (confirm('Apakah Anda yakin ingin mengubah status siswa ini?')) {
            router.patch(route('admin.students.toggle', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Siswa" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <GraduationCap className="h-6 w-6" />
                            Data Seluruh Siswa
                        </h1>
                        <p className="text-muted-foreground text-sm">Kelola informasi dan status aktif siswa / i.</p>
                    </div>
                </div>

                <div className="rounded-md border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">NIS</TableHead>
                                <TableHead>Nama Lengkap</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tanggal Daftar</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                                        Belum ada data siswa terdaftar.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                students.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell className="font-mono text-sm">{student.nis}</TableCell>
                                        <TableCell className="font-medium">{student.name}</TableCell>
                                        <TableCell>{student.email}</TableCell>
                                        <TableCell>
                                            <Badge variant={student.status === 'active' ? 'default' : 'destructive'} className={student.status === 'active' ? 'bg-green-600 hover:bg-green-700' : ''}>
                                                {student.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">{student.created_at}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Opsi Manajemen</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem 
                                                        onClick={() => toggleStatus(student.id)}
                                                        className={student.status === 'active' ? 'text-red-600' : 'text-green-600'}
                                                    >
                                                        {student.status === 'active' ? (
                                                            <><UserX className="mr-2 h-4 w-4" /> Non-aktifkan Siswa</>
                                                        ) : (
                                                            <><UserCheck className="mr-2 h-4 w-4" /> Aktifkan Siswa</>
                                                        )}
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
