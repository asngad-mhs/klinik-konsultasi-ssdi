export type Specialist = {
  id: string;
  name: string;
  role: 'Network Specialist' | 'Web Developer' | 'System Admin' | 'Domain Expert';
  bio: string;
  avatar: string;
  availability: string[];
};

export type MedicalRecord = {
  id: string;
  patientId: string;
  patientName: string;
  service: string;
  diagnosis: string;
  status: 'Critical' | 'Healthy' | 'Warning';
  date: string;
};

export type Appointment = {
  id: string;
  doctorName: string;
  date: string;
  time: string;
  problemType: string;
};
