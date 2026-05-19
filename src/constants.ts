import { Specialist, MedicalRecord } from './types';

export const SPECIALISTS: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Ahmad WiFi',
    role: 'Network Specialist',
    bio: 'Spesialis dalam merawat jaringan kampus, penanganan hotspot, dan optimasi bandwidth UNUGHA.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: '2',
    name: 'Prof. Siti Web',
    role: 'Web Developer',
    bio: 'Ahli dalam pengembangan sistem informasi akademik, perbaikan website, dan integrasi API kampus.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    availability: ['Tue', 'Thu'],
  },
  {
    id: '3',
    name: 'Dr. Budi Domain',
    role: 'Domain Expert',
    bio: 'Menangani registrasi .unugha.ac.id, manajemen DNS, dan sertifikasi SSL digital.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    availability: ['Mon', 'Tue', 'Thu'],
  },
];

export const MOCK_RECORDS: MedicalRecord[] = [
  {
    id: 'REC-001',
    patientId: '20230101',
    patientName: 'Budi Santoso',
    service: 'WiFi Connection',
    diagnosis: 'Signal Interference at Library Ground Floor',
    status: 'Healthy',
    date: '2026-05-18',
  },
  {
    id: 'REC-002',
    patientId: '20230142',
    patientName: 'Siti Aminah',
    service: 'SIAKAD Login',
    diagnosis: 'Expired Session Token / Invalid Credential',
    status: 'Warning',
    date: '2026-05-19',
  },
  {
    id: 'REC-003',
    patientId: '20220988',
    patientName: 'Rahmat Hidayat',
    service: 'Website Deployment',
    diagnosis: 'Critical DNS Propagation Failure',
    status: 'Critical',
    date: '2026-05-19',
  },
];
