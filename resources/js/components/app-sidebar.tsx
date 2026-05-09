import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { 
    BookOpen, 
    Folder, 
    LayoutGrid, 
    Users, 
    GraduationCap, 
    ShieldCheck, 
    School, 
    CalendarCheck, 
    QrCode, 
    FileText, 
    BarChart3,
    User,
    LogOut,
    History,
    QrCode as QrIcon,
    FileSpreadsheet,
    ClipboardCheck
} from 'lucide-react';

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const userRole = auth.user.role;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        },
    ];

    if (userRole === 'super_admin') {
        mainNavItems.push(
            { title: 'Data Siswa', href: '/data-siswa', icon: GraduationCap },
            { title: 'Data Guru', href: '/data-guru', icon: Users },
            { title: 'Data Satpam', href: '/data-satpam', icon: ShieldCheck },
            { title: 'Data Kelas', href: '/data-kelas', icon: School },
            { title: 'Absensi', href: '/absensi', icon: CalendarCheck },
            { title: 'QR Code', href: '/qr-code', icon: QrCode },
            { title: 'Nilai', href: '/nilai', icon: FileText },
            { title: 'Laporan', href: '/laporan', icon: BarChart3 },
            { 
                title: 'Jajaran Staff', 
                href: '/jajaran-staff', 
                icon: Users
            }
        );
    }

    if (userRole === 'guru_kepsek') {
        mainNavItems.push(
            { title: 'Data Siswa', href: '/data-siswa', icon: GraduationCap },
            { title: 'Nilai', href: '/nilai', icon: FileText },
            { title: 'Absensi', href: '/absensi', icon: CalendarCheck }
        );
    }

    if (userRole === 'satpam') {
        mainNavItems.push(
            { title: 'Scan QR', href: '/absensi', icon: QrCode },
            { title: 'Izin Keluar', href: '/izin-keluar', icon: LogOut },
            { title: 'Riwayat', href: '/absensi', icon: History }
        );
    }

    if (userRole === 'siswa') {
        mainNavItems.push(
            { 
                title: 'QR Saya', 
                href: '#', 
                icon: QrIcon,
                items: [
                    { title: 'Lihat QR', href: '/dashboard?show_qr=true' }
                ]
            },
            { title: 'Absensi Saya', href: '/absensi-siswa', icon: ClipboardCheck },
            { title: 'Nilai Saya', href: '/nilai-siswa', icon: FileSpreadsheet }
        );
    }

    const footerNavItems: NavItem[] = [
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: Folder,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
