import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { SPECIALISTS, MOCK_RECORDS } from '../constants';
import { Activity, Clock, ShieldCheck, AlertCircle, CheckCircle2, MoreVertical, Calendar as CalendarIcon, MapPin, ChevronRight, Network } from 'lucide-react';
import { cn } from '../lib/utils';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const CHART_DATA = [
  { time: '08:00', load: 30 },
  { time: '10:00', load: 65 },
  { time: '12:00', load: 85 },
  { time: '14:00', load: 70 },
  { time: '16:00', load: 45 },
  { time: '18:00', load: 20 },
];

export function SpecialistSection() {
  const [doctors, setDoctors] = useState(SPECIALISTS);

  useEffect(() => {
    fetch('/api/specialists')
      .then(res => res.json())
      .then(data => {
        // Merge status from API with constants
        const merged = SPECIALISTS.map(s => {
          const apiDoc = data.find((d: any) => d.id === s.id);
          return { ...s, role: apiDoc?.role || s.role, availability: apiDoc?.status ? [apiDoc.status] : s.availability };
        });
        setDoctors(merged);
      });
  }, []);

  return (
    <section id="specialists" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Konsultasi Dokter IT</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic font-mono uppercase text-xs tracking-widest">
            Temui barisan praktisi terbaik untuk solusi infrastruktur kampus anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((specialist, i) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-unugha-green hover:shadow-2xl transition-all group"
            >
              <div className="relative mb-6">
                <img 
                  src={specialist.avatar} 
                  alt={specialist.name} 
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-unugha-lime text-white p-1 rounded-lg border-2 border-white">
                  <ShieldCheck size={18} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{specialist.name}</h3>
              <p className="text-unugha-green text-sm font-bold mb-4">{specialist.role}</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {specialist.bio}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {specialist.availability.map(day => (
                  <span key={day} className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500">
                    {day}
                  </span>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-700 group-hover:bg-unugha-green group-hover:border-unugha-green group-hover:text-white transition-all">
                Buat Janji Temu
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DigitalEMR() {
  return (
    <section id="emr" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* EMR Dashboard Panel */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Rekam Medis Elektronik</h2>
                <p className="text-slate-500 text-sm">Dashboard riwayat kesehatan digital civitas UNUGHA</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50">
                  <Activity size={20} className="text-slate-400" />
                </button>
                <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center gap-2">
                  <MapPin size={16} />
                  Gedung SSDI, Lt. 2
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-bottom border-slate-100 bg-slate-50/50">
                      <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-widest">ID Rekam</th>
                      <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Pasien</th>
                      <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Layanan</th>
                      <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Status</th>
                      <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Riwayat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                    {MOCK_RECORDS.map((record) => (
                      <tr key={record.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                        <td className="px-8 py-5 font-mono text-slate-400 text-xs">{record.id}</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                              {record.patientName.charAt(0)}
                            </div>
                            <div>
                               <p className="font-bold text-slate-900">{record.patientName}</p>
                               <p className="text-[10px] text-slate-400 font-bold uppercase">{record.patientId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <p className="font-medium text-slate-700">{record.service}</p>
                          <p className="text-xs text-slate-400 line-clamp-1">{record.diagnosis}</p>
                        </td>
                        <td className="px-8 py-5">
                          <div className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                            record.status === 'Healthy' ? "bg-emerald-50 text-emerald-600" :
                            record.status === 'Warning' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                          )}>
                             {record.status === 'Healthy' && <CheckCircle2 size={12} />}
                             {record.status === 'Warning' && <AlertCircle size={12} />}
                             {record.status === 'Critical' && <Activity size={12} />}
                             {record.status}
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-unugha-green hover:bg-unugha-green/5 rounded-lg">
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Side Analytics & Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-unugha-green rounded-[2.5rem] p-8 text-white shadow-xl shadow-unugha-green/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Network size={120} />
               </div>
               <div className="relative z-10">
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Live Status</p>
                 <h3 className="text-2xl font-bold mb-6">Analitik Trafik Jaringan Kampus</h3>
                 
                 <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={CHART_DATA}>
                        <Line 
                          type="monotone" 
                          dataKey="load" 
                          stroke="#84cc16" 
                          strokeWidth={3} 
                          dot={false}
                        />
                        <Tooltip 
                          contentStyle={{ background: '#14532d', border: 'none', borderRadius: '12px', fontSize: '10px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mt-6">
                   <div className="bg-white/10 rounded-2xl p-4">
                     <p className="text-[10px] font-bold opacity-60">BANDWIDTH</p>
                     <p className="font-bold text-lg">1.2 Gbps</p>
                   </div>
                   <div className="bg-white/10 rounded-2xl p-4">
                     <p className="text-[10px] font-bold opacity-60">USER AKTIF</p>
                     <p className="font-bold text-lg">482</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8">
               <div className="flex items-center justify-between mb-6">
                 <h4 className="font-bold text-slate-900">Integrasi Sistem</h4>
                 <ShieldCheck size={20} className="text-unugha-lime" />
               </div>
               <div className="space-y-4">
                 {[
                   { name: 'SIAKAD UNUGHA', status: 'Connected' },
                   { name: 'SSDI Core API', status: 'Connected' },
                   { name: 'Portal Mahasiswa', status: 'Maintenance' },
                 ].map(sys => (
                   <div key={sys.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <p className="text-sm font-medium text-slate-700">{sys.name}</p>
                     <p className={cn(
                       "text-[10px] font-bold uppercase",
                       sys.status === 'Connected' ? "text-emerald-500" : "text-amber-500"
                     )}>{sys.status}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
