import { User, Settings, Heart, Clock, TicketPercent, ChevronRight, LogOut } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-[var(--color-background)] font-body">
      <header className="px-6 pt-12 pb-6 bg-[var(--color-primary)] rounded-b-[40px] shadow-lg shadow-green-900/10">
        <h1 className="font-heading font-bold text-3xl text-white mb-6">Profile</h1>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
            <User size={32} className="text-white" />
          </div>
          <div className="flex-1">
             <h2 className="font-heading font-bold text-xl text-white leading-tight">Alex Johnson</h2>
             <p className="text-green-100 text-sm font-medium">alex.johnson@example.com</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-32 flex flex-col gap-8">
        
        {/* Grocera Rewards */}
        <div className="bg-white rounded-3xl p-5 border border-[var(--color-secondary)]/50 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Grocera Rewards</p>
              <h3 className="font-heading font-bold text-3xl text-[var(--color-dark)]">1,450 <span className="text-lg text-gray-400">pts</span></h3>
            </div>
            <div className="bg-[var(--color-accent)] text-white p-2 rounded-xl">
              <TicketPercent size={24} />
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white rounded-[32px] overflow-hidden border border-[var(--color-secondary)]/50 shadow-sm">
          <MenuRow icon={Clock} label="Order History" />
          <MenuRow icon={Heart} label="Saved Items" />
          <MenuRow icon={TicketPercent} label="My Offers" />
          <MenuRow icon={Settings} label="Settings" />
        </div>

        <button className="flex items-center justify-center gap-2 text-red-500 font-bold py-4">
           <LogOut size={20} />
           Sign Out
        </button>

      </div>
    </div>
  );
}

function MenuRow({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-5 border-b last:border-0 border-[var(--color-secondary)]/50 active:bg-gray-50 transition-colors text-[var(--color-dark)] group">
       <div className="flex items-center gap-4">
         <Icon size={22} className="text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
         <span className="font-bold text-[15px]">{label}</span>
       </div>
       <ChevronRight size={20} className="text-gray-300" />
    </button>
  );
}
