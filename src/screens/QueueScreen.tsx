import { useState } from 'react';
import { ArrowLeft, Clock, CalendarClock, Zap, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function QueueScreen() {
  const navigate = useNavigate();
  const { queueStatus, estimatedWaitTime } = useStore();
  const [reserved, setReserved] = useState(false);

  const getTheme = () => {
    switch (queueStatus) {
      case 'Low': return { color: 'text-green-600', bg: 'bg-green-100', bar: 'bg-green-500', w: 'w-1/4' };
      case 'Moderate': return { color: 'text-yellow-600', bg: 'bg-yellow-100', bar: 'bg-yellow-500', w: 'w-2/4' };
      case 'Busy': return { color: 'text-red-600', bg: 'bg-red-100', bar: 'bg-red-500', w: 'w-full' };
    }
  };

  const theme = getTheme();

  return (
    <div className="flex flex-col h-full bg-[var(--color-background)] font-body">
      <header className="flex items-center p-6 pb-2">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full active:bg-gray-200 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-heading font-bold text-xl ml-2">Queue Monitor</h1>
      </header>

      <div className="px-6 pt-6 flex-1 overflow-y-auto">
        
        {/* Main Status Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[var(--color-secondary)]/50 text-center relative overflow-hidden mb-8">
           <div className={cn("absolute top-0 left-0 right-0 h-2", theme.bg)}>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: queueStatus === 'Low' ? '25%' : queueStatus === 'Moderate' ? '50%' : '90%' }} 
                className={cn("h-full", theme.bar)}
              />
           </div>
           
           <div className={cn("w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 mt-2", theme.bg, theme.color)}>
             <Clock size={40} />
           </div>
           
           <h2 className="font-heading font-bold text-3xl mb-1">{queueStatus} Activity</h2>
           <p className="text-gray-500 font-medium mb-6">Current estimated wait: <span className={cn("font-bold", theme.color)}>{estimatedWaitTime} mins</span></p>

           <div className="flex bg-gray-50 rounded-2xl p-4 text-left border border-gray-100">
             <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mr-3">
               <Zap size={20} />
             </div>
             <div>
               <h4 className="font-bold text-sm text-[var(--color-dark)]">Fast Lane Available</h4>
               <p className="text-xs text-gray-500 mt-1">If you use Express Checkout, you can bypass the main registers entirely.</p>
             </div>
           </div>
        </div>

        {/* Action: Reserve Slot */}
        <h3 className="font-heading font-bold text-xl mb-4">Pickup Slots</h3>
        
        {reserved ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[var(--color-primary)] text-white rounded-3xl p-6 flex items-start gap-4 shadow-lg shadow-green-900/20">
            <CheckCircle2 size={28} className="shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-lg">Slot Reserved!</h4>
              <p className="opacity-90 mt-1 text-sm leading-tight">Your groceries will be packed and ready at the store entrance desk.</p>
              <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm font-bold text-sm">
                Today, 4:30 PM - 5:00 PM
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-8">
             {['2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'].map((time) => (
                <button 
                  key={time}
                  onClick={() => setReserved(true)}
                  className="bg-white border border-[var(--color-secondary)] p-4 rounded-2xl flex flex-col items-center justify-center gap-2 active:bg-gray-50 transition-colors"
                >
                  <CalendarClock size={20} className="text-gray-400" />
                  <span className="font-medium text-sm text-[var(--color-dark)]">{time}</span>
                </button>
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
