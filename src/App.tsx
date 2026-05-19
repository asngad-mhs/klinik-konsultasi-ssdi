import { Navbar, Hero } from './components/Header';
import { SpecialistSection, DigitalEMR } from './components/ClinicDashboard';
import { BookingCalendar } from './components/BookingCalendar';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-unugha-green rounded-xl flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </motion.div>
              </div>
              <h1 className="text-xl font-bold tracking-tight">KLINIK SSDI UNUGHA</h1>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Pusat Transformasi Digital Universitas Nahdlatul Ulama Al Ghazali Cilacap. 
              Memberikan solusi terintegrasi untuk kesehatan infrastruktur IT kampus.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-unugha-green hover:border-unugha-green transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#specialists" className="hover:text-white transition-colors">Dokter Spesialis</a></li>
              <li><a href="#emr" className="hover:text-white transition-colors">Rekam Medis Digital</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Pendaftaran Online</a></li>
              <li><a href="https://siakad.unugha.ac.id" className="flex items-center gap-2 hover:text-white transition-colors">SIAKAD UNUGHA <ExternalLink size={14} /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-unugha-lime shrink-0" size={18} />
                <span>Gedung SSDI Lt. 1, Jl. Kemerdekaan No.17, Cilacap</span>
              </li>
              <li className="flex gap-3 text-unugha-lime font-bold">
                <Phone className="shrink-0" size={18} />
                <span>hp. 089670924182</span>
              </li>
              <li className="flex gap-3">
                <Mail className="shrink-0" size={18} />
                <span>ssdi@unugha.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 SSDIKampus UNUGHA. Terintegrasi dengan Sistem Informasi Akademik.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-unugha-lime selection:text-unugha-green">
      <Navbar />
      <main>
        <Hero />
        
        {/* Campus Integration Banner */}
        <section className="bg-slate-100 py-6 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-400 font-bold text-sm">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-unugha-lime rounded-full" 
                />
                INTEGRATED WITH SIAKAD UNUGHA
                <span className="opacity-20">//</span>
                SYSTEM STATUS: OPTIMAL
                <span className="opacity-20">//</span>
                SSDI KAMPUS SYNCED
              </div>
            ))}
          </div>
        </section>

        <SpecialistSection />
        <DigitalEMR />
        <BookingCalendar />
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}

