import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import { format, addDays, startOfToday, eachDayOfInterval, endOfMonth, startOfMonth, isSameDay, isToday } from 'date-fns';
import { cn } from '../lib/utils';
import { SPECIALISTS } from '../constants';

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
  
  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section id="booking" className="py-24 px-6 medical-gradient overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Reservasi Layanan Digital</h2>
          <p className="text-slate-500 mt-2">Pilih jadwal konsultasi yang sesuai dengan kebutuhan teknis anda</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-white p-2 md:p-8 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Calendar View */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl text-slate-900">{format(selectedDate, 'MMMM yyyy')}</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-[10px] font-black text-slate-300 uppercase py-2">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "aspect-square rounded-2xl flex flex-col items-center justify-center text-sm transition-all",
                      isSameDay(day, selectedDate) ? "bg-unugha-green text-white font-bold shadow-lg shadow-unugha-green/30 scale-110 z-10" : "hover:bg-slate-50 text-slate-600",
                      !isSameDay(day, selectedDate) && isToday(day) && "text-unugha-lime font-bold"
                    )}
                  >
                    {format(day, 'd')}
                    {isToday(day) && !isSameDay(day, selectedDate) && (
                      <div className="w-1 h-1 bg-unugha-lime rounded-full mt-1" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Jam Tersedia</p>
                <div className="flex flex-wrap gap-2">
                  {times.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        selectedTime === time 
                        ? "bg-slate-900 text-white shadow-lg" 
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Data Pemohon</h3>
                    <p className="text-sm text-slate-500 mb-8">Lengkapi formulir di bawah ini untuk mengonfirmasi janji temu.</p>

                    <form onSubmit={handleBooking} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Layanan</label>
                        <select className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-unugha-green/20 focus:border-unugha-green outline-none transition-all">
                          <option>Optimasi WiFi Kampus</option>
                          <option>Manajemen Domain UNUGHA</option>
                          <option>Integrasi SIAKAD</option>
                          <option>Perbaikan Email Institusi</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-slate-300 focus-within:text-unugha-green transition-colors">
                           <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-2xl p-4 focus-within:border-unugha-green">
                             <User size={18} />
                             <input type="text" placeholder="NIM/NIDN" className="bg-transparent border-none outline-none text-sm font-medium text-slate-900 w-full" required />
                           </div>
                        </div>
                        <div className="space-y-2 text-slate-300 focus-within:text-unugha-green transition-colors">
                           <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-2xl p-4 focus-within:border-unugha-green">
                             <Mail size={18} />
                             <input type="email" placeholder="Email" className="bg-transparent border-none outline-none text-sm font-medium text-slate-900 w-full" required />
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-slate-300 focus-within:text-unugha-green transition-colors">
                        <div className="flex items-baseline gap-2 border border-slate-200 bg-white rounded-2xl p-4 focus-within:border-unugha-green">
                           <MessageSquare size={18} className="mt-1" />
                           <textarea placeholder="Deskripsi Masalah..." className="bg-transparent border-none outline-none text-sm font-medium text-slate-900 w-full min-h-[100px] resize-none" required />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={!selectedTime}
                        className="w-full bg-unugha-green text-white py-5 rounded-2xl font-bold shadow-xl shadow-unugha-green/20 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
                      >
                        Konfirmasi Janji Temu
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-unugha-lime/10 text-unugha-lime rounded-full flex items-center justify-center mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Berhasil Didaftarkan!</h3>
                    <p className="text-slate-500 mb-8 max-w-xs">
                      Janji temu telah tercatat dalam sistem SSDI. Detail konfirmasi telah dikirim ke email anda.
                    </p>
                    <div className="w-full bg-white rounded-3xl p-6 border border-slate-100 text-left mb-8">
                       <div className="flex items-center gap-4 border-b border-slate-50 pb-4 mb-4">
                         <CalendarIcon size={20} className="text-unugha-green" />
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Waktu</p>
                            <p className="text-sm font-bold text-slate-700">{format(selectedDate, 'EEEE, d MMMM yyyy')}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-4">
                         <Clock size={20} className="text-unugha-green" />
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Jam</p>
                            <p className="text-sm font-bold text-slate-700">{selectedTime} WIB</p>
                         </div>
                       </div>
                    </div>
                    <button 
                      onClick={() => { setIsSuccess(false); setSelectedTime(null); }}
                      className="text-unugha-green font-bold text-sm hover:underline"
                    >
                      Buat Reservasi Baru
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
