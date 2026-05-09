import { Head, router } from '@inertiajs/react';
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
import { MoreHorizontal, UserCheck, UserX, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Guru',
        href: '/data-guru',
    },
];

interface TeacherData {
    id: number;
    name: string;
    email: string;
    status: string;
    nip: string;
    created_at: string;
}

export default function TeacherIndex({ teachers }: { teachers: TeacherData[] }) {
    const toggleStatus = (id: number) => {
        if (confirm('Apakah Anda yakin ingin mengubah status guru ini?')) {
            router.patch(route('admin.teachers.toggle', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Guru" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Users className="h-6 w-6" />
                            Data Seluruh Guru / Kepsek
                        </h1>
                        <p className="text-muted-foreground text-sm">Kelola informasi dan status aktif tenaga pendidik.</p>
                    </div>
                </div>

                <div className="rounded-md border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">NIP</TableHead>
                                <TableHead>Nama Lengkap</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tanggal Daftar</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teachers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                                        Belum ada data guru terdaftar.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                teachers.map((teacher) => (
                                    <TableRow key={teacher.id}>
                                        <TableCell className="font-mono text-sm">{teacher.nip}</TableCell>
                                        <TableCell className="font-medium">{teacher.name}</TableCell>
                                        <TableCell>{teacher.email}</TableCell>
                                        <TableCell>
                                            <Badge variant={teacher.status === 'active' ? 'default' : 'destructive'} className={teacher.status === 'active' ? 'bg-green-600 hover:bg-green-700' : ''}>
                                                {teacher.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">{teacher.created_at}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Opsi Manajemen</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem 
                                                        onClick={() => toggleStatus(teacher.id)}
                                                        className={teacher.status === 'active' ? 'text-red-600' : 'text-green-600'}
                                                    >
                                                        {teacher.status === 'active' ? (
                                                            <><UserX className="mr-2 h-4 w-4" /> Non-aktifkan Guru</>
                                                        ) : (
                                                            <><UserCheck className="mr-2 h-4 w-4" /> Aktifkan Guru</>
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
