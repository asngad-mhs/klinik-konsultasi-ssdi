import { Specialist, MedicalRecord } from './types';

export const SPECIALISTS: Specialist[] = [
  {
    id: '1',
    name: 'Bp. Asngad, M.Kom',
    role: 'Network Specialist',
    bio: 'Ahli infrastruktur jaringan UNUGHA. Fokus pada optimasi access point di Gedung Rektorat dan Laboratorium Komputer.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: '2',
    name: 'Ibu Siti, S.T',
    role: 'Web Developer',
    bio: 'Fokus pada pengembangan SIAKAD UNUGHA, perbaikan sistem KRS, dan integrasi database mahasiswa.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    availability: ['Tue', 'Thu'],
  },
  {
    id: '3',
    name: 'Bp. Nur, M.T',
    role: 'System Admin',
    bio: 'Manajemen server pusat, pemulihan email institusi, dan keamanan data civitas akademika UNUGHA.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    availability: ['Mon', 'Tue', 'Thu'],
  },
];

export const MOCK_RECORDS: MedicalRecord[] = [
  {
    id: 'EMR-UN-001',
    patientId: '20230101',
    patientName: 'Ahmad Fauzi',
    service: 'WiFi Gedung A',
    diagnosis: 'Masalah Autentikasi User - Sinyal Lemah di Lt. 2',
    status: 'Healthy',
    date: '2026-05-18',
  },
  {
    id: 'EMR-UN-002',
    patientId: '20230142',
    patientName: 'Siti Rohmah',
    service: 'Troubleshoot SIAKAD',
    diagnosis: 'Error Input KRS - Matakuliah Tidak Muncul',
    status: 'Warning',
    date: '2026-05-19',
  },
  {
    id: 'EMR-UN-003',
    patientId: '20220988',
    patientName: 'Rahmat D.',
    service: 'Email Institusi',
    diagnosis: 'Reset Password Email @unugha.ac.id',
    status: 'Critical',
    date: '2026-05-19',
  },
];
