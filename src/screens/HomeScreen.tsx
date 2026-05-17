import { MOCK_PRODUCTS, FREQUENTLY_BOUGHT, CATEGORIES } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';
import { useStore } from '../store/useStore';
import { MapPin, Bell, Clock, Zap, Target, TicketPercent, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export function HomeScreen() {
  const { queueStatus, estimatedWaitTime } = useStore();
  const navigate = useNavigate();

  const getQueueBadge = () => {
    switch (queueStatus) {
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Busy': return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  return (
    <div className="flex flex-col gap-6 pb-6 w-full h-full">
      {/* Header Area */}
      <header className="px-6 pt-12 pb-4 bg-white rounded-b-[40px] shadow-sm z-10 sticky top-0 relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Delivering to</p>
              <div className="flex items-center gap-1">
                <h2 className="font-heading font-bold text-lg leading-tight">Home (Apt 4B)</h2>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <button className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center relative">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--color-accent)] border border-white" />
          </button>
        </div>

        {/* Live Queue Banner */}
        <div className={`p-4 rounded-3xl border flex items-center justify-between \${getQueueBadge()}`}>
          <div className="flex items-center gap-3">
            <Clock size={20} />
            <div>
              <p className="font-bold text-sm leading-tight">Live Store Queue</p>
              <p className="text-xs font-medium opacity-80 mt-0.5">{queueStatus} Activity • {estimatedWaitTime}m wait</p>
            </div>
          </div>
          <button 
            className="px-4 py-2 bg-white/80 rounded-full text-xs font-bold text-inherit shadow-sm backdrop-blur-sm active:bg-white"
            onClick={() => navigate('/queue')}
          >
            Reserve Slot
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col gap-8">
        
        {/* Quick Actions Row */}
        <section className="px-6">
          <div className="flex gap-4">
             <QuickActionCard 
               icon={Target} 
               label="Scan & Go" 
               color="bg-[#242424] text-white" 
               onClick={() => navigate('/scan')}
             />
             <QuickActionCard 
               icon={Zap} 
               label="Express" 
               color="bg-[var(--color-accent)] text-white"
               onClick={() => navigate('/cart')}
             />
             <QuickActionCard 
               icon={TicketPercent} 
               label="Offers" 
               color="bg-[var(--color-secondary)] text-[#242424]"
             />
          </div>
        </section>

        {/* Category Chips - Horizontal Scroll */}
        <section className="pl-6 w-full">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar select-none pr-6">
            <button className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-full font-medium text-sm whitespace-nowrap shadow-md shadow-green-900/10">
              All
            </button>
            {CATEGORIES.map(cat => (
               <button key={cat.id} className="px-5 py-2.5 bg-white border border-[var(--color-secondary)] text-[var(--color-dark)] rounded-full font-medium text-sm whitespace-nowrap active:bg-gray-50 flex items-center gap-2">
                 <span>{cat.icon}</span>
                 {cat.name}
               </button>
            ))}
          </div>
        </section>

        {/* Dynamic Shelf - Frequently Bought */}
        <section className="pl-6 select-none overflow-hidden pb-4">
          <div className="flex justify-between items-end pr-6 mb-4">
            <h2 className="font-heading font-bold text-2xl text-[var(--color-dark)]">Buy it again</h2>
            <button className="text-[var(--color-primary)] text-sm font-bold">See all</button>
          </div>
          <div className="flex gap-5 overflow-x-auto hide-scrollbar pr-6 pb-6">
            {FREQUENTLY_BOUGHT.map(id => (
              <ProductCard key={id} productId={id} />
            ))}
          </div>
        </section>

        {/* Banners Space - Smart Recommendation */}
        <section className="px-6 pb-2">
          <div className="w-full h-32 bg-[#E1F3D8] rounded-[32px] overflow-hidden relative flex items-center px-6">
            <div className="z-10 w-2/3">
              <span className="text-[var(--color-primary-dark)] text-xs font-bold tracking-wider uppercase mb-1 block">Smart Combo</span>
              <h3 className="font-heading font-bold text-xl leading-tight mb-2 text-[#185530]">Weekend Breakfast Kit</h3>
              <button className="bg-white text-[#185530] text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                Add Bundle $12
              </button>
            </div>
            {/* Visual fluff */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&q=80&w=300&h=300" 
              className="absolute right-[-40px] w-48 h-48 object-cover mix-blend-multiply opacity-50 rounded-full"
              alt="Breakfast"
            />
          </div>
        </section>

        {/* Our Products */}
        <section className="px-6 pb-24">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-heading font-bold text-2xl text-[var(--color-dark)]">Our Products</h2>
          </div>
          <div className="flex flex-col gap-8">
            {CATEGORIES.map(category => {
              const categoryProducts = MOCK_PRODUCTS.filter(p => p.category === category.name);
              if (categoryProducts.length === 0) return null;
              
              return (
                <div key={category.id} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    <h3 className="font-bold text-lg text-[var(--color-dark)]">{category.name}</h3>
                  </div>
                  <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 -mx-6 px-6">
                    {categoryProducts.map(product => (
                      <ProductCard key={product.id} productId={product.id} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

function QuickActionCard({ icon: Icon, label, color, onClick }: { icon: any, label: string, color: string, onClick?: () => void }) {
  return (
     <button 
       onClick={onClick}
       className={cn("flex-1 h-24 rounded-3xl p-4 flex flex-col justify-between active:scale-[0.98] transition-transform shadow-sm", color)}
     >
       <Icon size={24} />
       <span className="font-medium text-sm text-left leading-tight">{label}</span>
     </button>
  );
}
