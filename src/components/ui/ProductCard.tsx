import React from 'react';
import { cn } from '../../lib/utils';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { useStore, Product } from '../../store/useStore';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProductCard({ productId, orientation = 'vertical' }: { productId: string, orientation?: 'vertical' | 'horizontal' }) {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);
  const { cart, addToCart, updateQuantity, removeFromCart } = useStore();
  
  if (!product) return null;

  const cartItem = cart.find(item => item.id === productId);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity === 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, quantity - 1);
    }
  };

  if (orientation === 'horizontal') {
    return (
      <div className="flex bg-white rounded-2xl p-3 gap-3 shadow-sm border border-[var(--color-secondary)]/50 active:scale-[0.98] transition-transform">
        <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <h4 className="font-medium text-sm text-[var(--color-dark)] line-clamp-2 leading-tight">{product.name}</h4>
            <span className="text-xs text-gray-500 mt-0.5 inline-block">{product.unit}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-base text-[var(--color-dark)]">${product.price}</span>
            {quantity > 0 ? (
              <div className="flex items-center bg-[var(--color-primary)] text-white rounded-full px-2 py-1 gap-3 shadow-md shadow-green-900/10">
                <button onClick={handleDecrement} className="p-0.5 active:opacity-50"><Minus size={14} /></button>
                <span className="text-xs font-bold w-3 text-center">{quantity}</span>
                <button onClick={handleIncrement} className="p-0.5 active:opacity-50"><Plus size={14} /></button>
              </div>
            ) : (
              <button 
                onClick={handleAdd}
                className="w-8 h-8 rounded-full bg-[var(--color-background)] border border-[var(--color-secondary)] flexitems-center justify-center flex items-center text-[var(--color-primary)] active:bg-green-50 transition-colors"
                aria-label="Add to cart"
              >
                <Plus size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-40 flex-shrink-0 flex flex-col gap-2">
      <div className="relative aspect-square w-full bg-white rounded-3xl p-4 shadow-sm border border-[var(--color-secondary)]/50">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags?.[0] && (
            <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full text-[var(--color-dark)] shadow-sm">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Add Button Area */}
        <div className="absolute -bottom-4 left-0 w-full flex justify-center">
            {quantity > 0 ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center bg-[var(--color-primary)] text-white rounded-full px-3 py-2 gap-4 shadow-lg shadow-green-900/20"
              >
                <button onClick={handleDecrement} className="p-0.5 active:opacity-50"><Minus size={16} /></button>
                <span className="font-bold text-sm w-4 text-center">{quantity}</span>
                <button onClick={handleIncrement} className="p-0.5 active:opacity-50"><Plus size={16} /></button>
              </motion.div>
            ) : (
              <motion.button 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handleAdd}
                className="bg-[var(--color-dark)] hover:bg-black text-white rounded-full p-3 shadow-lg transition-transform active:scale-95"
              >
                <ShoppingBag size={18} />
              </motion.button>
            )}
        </div>
      </div>
      
      <div className="mt-4 px-1">
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
        <h3 className="font-medium text-sm text-[var(--color-dark)] mt-0.5 leading-tight">{product.name}</h3>
        <span className="text-xs text-gray-500 mt-0.5">{product.unit}</span>
      </div>
    </div>
  );
}
