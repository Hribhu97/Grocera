import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArrowLeft, CheckCircle2, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function CheckoutScreen() {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<'review' | 'processing' | 'success'>('review');

  const grandTotal = cartTotal() * 1.08;

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[var(--color-background)] font-body items-center relative">
      {/* Header */}
      <header className="w-full flex items-center p-6 pb-2">
        {step === 'review' && (
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full active:bg-gray-200 transition-colors">
            <ArrowLeft size={24} />
          </button>
        )}
      </header>

      {/* Content */}
      <div className="flex-1 w-full flex flex-col items-center px-6 pt-4">
        {step === 'review' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <h1 className="font-heading font-bold text-3xl mb-8">Express Checkout</h1>
            
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[var(--color-secondary)]/50 mb-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">Payment Method</span>
                <span className="font-bold">Apple Pay</span>
              </div>
              <div className="h-px bg-gray-100 w-full mb-6" />
              <div className="flex justify-between items-end">
                <span className="text-gray-500 font-medium">Total to Pay</span>
                <span className="font-heading font-bold text-3xl text-[var(--color-primary)]">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center px-4 mb-8">
              By tapping pay, you agree to Grocera's terms of service and instant digital billing.
            </p>

            <button 
              onClick={handlePay}
              className="w-full h-14 bg-black text-white font-bold text-lg rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
               Pay with Apple Pay
            </button>
          </motion.div>
        )}

        {step === 'processing' && (
          <div className="flex-1 flex flex-col items-center justify-center -mt-20">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               className="w-16 h-16 border-4 border-gray-200 border-t-[var(--color-primary)] rounded-full mb-6"
             />
             <h2 className="font-heading font-bold text-xl">Processing Payment...</h2>
          </div>
        )}

        {step === 'success' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-full flex flex-col items-center mt-8"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="font-heading font-bold text-3xl mb-2 text-center text-[var(--color-dark)]">Payment Successful</h2>
            <p className="text-gray-500 mb-12">You're good to go!</p>

            {/* Exit QR Code Card */}
            <div className="w-full bg-white p-8 rounded-[40px] shadow-2xl flex flex-col items-center border border-gray-100">
               <p className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-6">Exit Pass</p>
               <div className="w-48 h-48 bg-gray-100 rounded-2xl mb-8 flex items-center justify-center border-2 border-dashed border-gray-300">
                 <QrCode size={120} strokeWidth={1} className="text-black" />
               </div>
               <p className="text-center font-medium text-gray-800 leading-snug">
                 Scan this QR code at the<br/>Express Gate to exit the store
               </p>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="mt-8 text-gray-500 font-bold active:text-black transition-colors"
            >
              Done
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
