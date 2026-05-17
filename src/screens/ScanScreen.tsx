import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Flashlight, X, Search, ScanLine } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../store/useStore';
import { MOCK_PRODUCTS } from '../data/mockData';

export function ScanScreen() {
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [scannedProduct, setScannedProduct] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(true);

  // Mock scan effect
  useEffect(() => {
    let timer: any;
    if (isScanning) {
      timer = setTimeout(() => {
        // Mock finding a product after 2 seconds
        setScannedProduct(MOCK_PRODUCTS[0]); // organic avocado
        setIsScanning(false);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [isScanning]);

  const handleAdd = () => {
    if (scannedProduct) {
      addToCart(scannedProduct);
      setScannedProduct(null);
      setIsScanning(true);
    }
  };

  return (
    <div className="h-full bg-black relative overflow-hidden font-body flex flex-col">
      {/* Mock Camera Viewfinder */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="w-full h-full object-cover"
           poster="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600&h=800"
        >
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <header className="flex items-center justify-between p-6 z-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <X size={24} />
        </button>
        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white text-xs font-bold tracking-wider">STORE: DOWNTOWN</span>
        </div>
        <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <Flashlight size={20} />
        </button>
      </header>

      {/* Viewfinder overlay */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 px-8">
        <AnimatePresence mode="wait">
          {isScanning ? (
            <motion.div 
              key="scanning"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="relative w-full aspect-square max-w-[280px]"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white/80 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white/80 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white/80 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white/80 rounded-br-3xl" />
              
              {/* Scanning line animation */}
              <motion.div 
                className="w-full h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] absolute left-0"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
              />

              <div className="absolute -bottom-16 w-full text-center">
                <p className="text-white font-medium drop-shadow-md">Align barcode within frame</p>
              </div>
            </motion.div>
          ) : scannedProduct ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] p-5 w-full shadow-2xl"
            >
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-50 rounded-2xl p-2 shrink-0">
                  <img src={scannedProduct.image} alt={scannedProduct.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 py-1">
                  <h3 className="font-heading font-bold text-lg leading-tight text-[var(--color-dark)]">{scannedProduct.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{scannedProduct.unit}</p>
                  <p className="font-heading font-bold text-xl text-[var(--color-primary)] mt-2">${scannedProduct.price}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setIsScanning(true)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl active:bg-gray-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAdd}
                  className="flex-[2] py-3 bg-[var(--color-dark)] text-white font-bold rounded-xl active:scale-95 transition-transform"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="p-6 pb-10 flex justify-center z-10 w-full">
         <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/30">
           <Search size={18} />
           <span>Enter Code Manually</span>
         </button>
      </div>
    </div>
  );
}
