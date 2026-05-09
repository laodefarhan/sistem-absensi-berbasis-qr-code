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
import { MoreHorizontal, UserCheck, UserX, ShieldCheck } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Satpam',
        href: '/data-satpam',
    },
];

interface SecurityData {
    id: number;
    name: string;
    email: string;
    status: string;
    created_at: string;
}

export default function SecurityIndex({ security }: { security: SecurityData[] }) {
    const toggleStatus = (id: number) => {
        if (confirm('Apakah Anda yakin ingin mengubah status satpam ini?')) {
            router.patch(route('admin.security.toggle', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Satpam" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ShieldCheck className="h-6 w-6" />
                            Data Seluruh Satpam
                        </h1>
                        <p className="text-muted-foreground text-sm">Kelola informasi dan status aktif petugas keamanan.</p>
                    </div>
                </div>

                <div className="rounded-md border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Nama Lengkap</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tanggal Daftar</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {security.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                                        Belum ada data satpam terdaftar.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                security.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-mono text-sm">#SPM-{item.id}</TableCell>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.status === 'active' ? 'default' : 'destructive'} className={item.status === 'active' ? 'bg-green-600 hover:bg-green-700' : ''}>
                                                {item.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">{item.created_at}</TableCell>
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
                                                        onClick={() => toggleStatus(item.id)}
                                                        className={item.status === 'active' ? 'text-red-600' : 'text-green-600'}
                                                    >
                                                        {item.status === 'active' ? (
                                                            <><UserX className="mr-2 h-4 w-4" /> Non-aktifkan Satpam</>
                                                        ) : (
                                                            <><UserCheck className="mr-2 h-4 w-4" /> Aktifkan Satpam</>
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
