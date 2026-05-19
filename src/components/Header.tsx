import { motion } from 'motion/react';
import { Activity, Shield, Users, Globe, Network, Calendar as CalendarIcon, LogIn } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel h-16 flex items-center px-6 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-unugha-green rounded-xl flex items-center justify-center">
          <Activity className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-unugha-green leading-none">KLINIK SSDI</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">UNUGHA CILACAP</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#specialists" className="hover:text-unugha-green transition-colors">Spesialis</a>
        <a href="#emr" className="hover:text-unugha-green transition-colors">Rekam Medis</a>
        <a href="#booking" className="hover:text-unugha-green transition-colors">Janji Temu</a>
      </div>

      <button className="flex items-center gap-2 bg-unugha-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-unugha-green/20 hover:scale-105 transition-transform active:scale-95">
        <LogIn size={16} />
        SIAKAD Login
      </button>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-unugha-lime/10 text-unugha-lime rounded-full text-xs font-bold mb-6">
          <Shield size={14} />
          Digital Information Assurance
        </div>
        <h2 className="text-5xl lg:text-7xl font-bold font-sans tracking-tighter text-slate-900 mb-6 leading-[0.9]">
          Kesehatan Digital <br />
          <span className="text-unugha-green italic">Masa Depan</span> Kampus.
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
          Pusat layanan konsultasi IT, optimasi jaringan, dan manajemen rekam medis digital universitas yang terintegrasi penuh dengan SSDIKampus UNUGHA.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#booking" className="bg-unugha-green text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-unugha-green/20 hover:-translate-y-1 transition-all">
            Daftar Konsultasi
          </a>
          <a href="#emr" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:border-unugha-green hover:text-unugha-green transition-all">
            Lihat Rekam Medis
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-[3rem] medical-gradient relative overflow-hidden shadow-2xl border-2 border-white">
          <div className="absolute inset-0 tech-grid opacity-30" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Network, label: 'WiFi Diagnostic', color: 'bg-blue-500' },
                { icon: Globe, label: 'Domain Recovery', color: 'bg-unugha-lime' },
                { icon: Activity, label: 'System Health', color: 'bg-unugha-green' },
                { icon: Users, label: 'Patient Support', color: 'bg-orange-500' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-3 group hover:border-unugha-green transition-colors"
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white", item.color)}>
                    <item.icon size={24} />
                  </div>
                  <p className="font-bold text-slate-800 text-sm whitespace-nowrap">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Stat Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-3xl shadow-xl w-64"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-unugha-green/10 text-unugha-green rounded-lg">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Jaringan UNUGHA</p>
              <p className="font-bold text-unugha-green">98.4% Optimal</p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '98.4%' }}
               transition={{ duration: 1, delay: 1 }}
               className="h-full bg-unugha-green" 
             />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
