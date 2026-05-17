import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, ScanLine, ShoppingCart, User } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function MobileWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center items-center">
      <div className="w-full h-full sm:w-[400px] sm:h-[800px] bg-[var(--color-background)] sm:rounded-[40px] sm:shadow-2xl sm:overflow-hidden relative flex flex-col font-body">
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-24">
          {children}
        </div>
        
        {/* Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useStore(state => state.cart);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: ScanLine, label: 'Scan', path: '/scan', isPrimary: true },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cartQuantity },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-[var(--color-secondary)] px-6 py-4 flex justify-between items-center rounded-b-[40px] z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        if (item.isPrimary) {
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/20 transform -translate-y-4 transition-transform active:scale-95"
            >
              <Icon size={24} />
            </button>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1 w-12 relative"
          >
            <div className={cn(
              "transition-colors duration-200",
              isActive ? "text-[var(--color-primary)]" : "text-gray-400"
            )}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {item.badge ? (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-accent)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </div>
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-1 absolute -bottom-3" />
            )}
          </button>
        );
      })}
    </div>
  );
}
