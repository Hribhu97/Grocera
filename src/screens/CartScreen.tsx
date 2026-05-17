import { useState } from 'react';
import { useStore, Product } from '../store/useStore';
import { ProductCard } from '../components/ui/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ArrowLeft, Trash2, ArrowRight, Wallet, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function CartScreen() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = cartTotal();
  const tax = total * 0.08;
  const grandTotal = total + tax;

  if (cart.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-[var(--color-background)]">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-[var(--color-secondary)]">
          <Wallet size={48} className="text-gray-300" />
        </div>
        <h2 className="font-heading font-bold text-2xl mb-2 text-center">Your cart is empty</h2>
        <p className="text-gray-500 text-center mb-8">Scan items in-store or add them from the catalog to get started.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[var(--color-dark)] text-white font-bold py-4 px-8 rounded-full shadow-lg active:scale-95 transition-transform"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[var(--color-background)] pb-10">
      <header className="flex items-center justify-between p-6 bg-white sticky top-0 z-10 border-b border-[var(--color-secondary)]/50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full active:bg-gray-100">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-heading font-bold text-2xl">Smart Cart</h1>
        </div>
        <button onClick={clearCart} className="text-gray-400 hover:text-red-500 active:scale-95 transition-colors p-2 -mr-2">
          <Trash2 size={20} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-40">
        {/* Cart Items List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {cart.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProductCard productId={item.id} orientation="horizontal" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Smart Substitution / Upsell */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-3xl p-5 relative overflow-hidden">
          <div className="flex items-start gap-3 relative z-10">
            <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-blue-900">Add 1 more dairy item</h4>
              <p className="text-xs text-blue-700 mt-1">Get 10% off your entire dairy selection today.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Sheet (always visible at bottom, distinct from bottom nav) */}
      <div className="absolute bottom-24 left-0 w-full px-4">
        <div className="bg-white rounded-[32px] p-5 shadow-2xl shadow-black/5 border border-gray-100">
          <div className="flex justify-between items-center mb-4 px-2">
            <span className="text-gray-500 font-medium">Total</span>
            <div className="text-right">
              <span className="font-heading font-bold text-2xl text-[var(--color-dark)]">${grandTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className="w-full bg-[var(--color-primary)] text-white font-bold text-lg py-4 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg shadow-green-900/20"
            onClick={() => navigate('/checkout')}
          >
            Express Checkout
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
