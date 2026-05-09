import { Head, useForm } from '@inertiajs/react';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import { FileText, Plus } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Nilai',
        href: '/nilai',
    },
];

interface Student {
    id: number;
    name: string;
    grade: string;
}

interface Score {
    id: number;
    subject: string;
    score: number;
    semester: string;
    student: {
        user: {
            name: string;
        };
        grade?: {
            name: string;
        };
    };
}

export default function ScoreIndex({ scores, students }: { scores: Score[], students: Student[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        student_id: '',
        subject: '',
        score: '',
        semester: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.scores.store'), {
            onSuccess: () => {
                setIsModalOpen(false);
                reset();
            }
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Nilai" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <FileText className="h-6 w-6" />
                            Manajemen Nilai Siswa
                        </h1>
                        <p className="text-muted-foreground text-sm">Catat dan pantau pencapaian akademik siswa.</p>
                    </div>

                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                            <Button className="gap-2">
                                <Plus className="h-4 w-4" /> Input Nilai
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <form onSubmit={submit}>
                                <DialogHeader>
                                    <DialogTitle>Input Nilai Baru</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label>Pilih Siswa</Label>
                                        <Select onValueChange={(v) => setData('student_id', v)}>
                                            <SelectTrigger><SelectValue placeholder="Cari Nama Siswa" /></SelectTrigger>
                                            <SelectContent>
                                                {students.map((s) => (
                                                    <SelectItem key={s.id} value={s.id.toString()}>
                                                        {s.name} ({s.grade})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.student_id && <p className="text-xs text-red-500">{errors.student_id}</p>}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Mata Pelajaran</Label>
                                        <Input placeholder="Contoh: Matematika, IPA, dll" value={data.subject} onChange={(e) => setData('subject', e.target.value)} />
                                        {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label>Nilai (0-100)</Label>
                                            <Input type="number" step="0.01" value={data.score} onChange={(e) => setData('score', e.target.value)} />
                                            {errors.score && <p className="text-xs text-red-500">{errors.score}</p>}
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Semester</Label>
                                            <Input placeholder="Ganjil 2025/2026" value={data.semester} onChange={(e) => setData('semester', e.target.value)} />
                                            {errors.semester && <p className="text-xs text-red-500">{errors.semester}</p>}
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" disabled={processing}>Simpan Data Nilai</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="rounded-xl border bg-card overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Nama Siswa</TableHead>
                                <TableHead>Kelas</TableHead>
                                <TableHead>Mata Pelajaran</TableHead>
                                <TableHead>Semester</TableHead>
                                <TableHead className="text-right">Nilai</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {scores.length === 0 ? (
                                <TableRow><TableCell colSpan={6} className="text-center py-10">Belum ada data nilai yang tercatat.</TableCell></TableRow>
                            ) : (
                                scores.map((score, index) => (
                                    <TableRow key={score.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell className="font-semibold">{score.student.user.name}</TableCell>
                                        <TableCell>{score.student.grade?.name ?? '-'}</TableCell>
                                        <TableCell>{score.subject}</TableCell>
                                        <TableCell>{score.semester}</TableCell>
                                        <TableCell className={`text-right font-bold text-base ${score.score >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                                            {score.score}
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
