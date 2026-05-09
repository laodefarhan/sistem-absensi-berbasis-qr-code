import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Users, ShieldCheck, Shield } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Jajaran Staff',
        href: '/jajaran-staff',
    },
];

export default function StaffIndex() {
    const { activeStaff = [] } = usePage<SharedData>().props;

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'super_admin':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
            case 'guru_kepsek':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
            case 'satpam':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    const getRoleLabel = (role: string) => {
        switch (role) {
            case 'super_admin': return 'Super Admin';
            case 'guru_kepsek': return 'Guru / Kepsek';
            case 'satpam': return 'Satpam';
            default: return role;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Jajaran Staff" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="mb-2">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Users className="h-6 w-6" />
                        Jajaran Staff
                    </h1>
                    <p className="text-muted-foreground text-sm">Daftar seluruh jajaran staff yang terdaftar dalam sistem.</p>
                </div>

                <div className="bg-card border rounded-xl overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Nama Staff</TableHead>
                                <TableHead>Peran / Jabatan</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {activeStaff.length > 0 ? (
                                activeStaff.map((staff, index) => (
                                    <TableRow key={staff.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-sidebar-accent/50 p-2 rounded-lg">
                                                    {staff.role === 'super_admin' ? (
                                                        <ShieldCheck className="h-4 w-4" />
                                                    ) : staff.role === 'guru_kepsek' ? (
                                                        <Users className="h-4 w-4" />
                                                    ) : (
                                                        <Shield className="h-4 w-4" />
                                                    )}
                                                </div>
                                                <span className="font-semibold text-sm">{staff.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(staff.role)}`}>
                                                {getRoleLabel(staff.role)}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex justify-center items-center gap-2">
                                                <div className={`h-2 w-2 rounded-full ${staff.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`} />
                                                <span className={`text-xs font-medium ${staff.status === 'active' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                                    {staff.status === 'active' ? 'Aktif' : 'Non-aktif'}
                                                </span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-24 text-center">
                                        Data staff tidak ditemukan.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
