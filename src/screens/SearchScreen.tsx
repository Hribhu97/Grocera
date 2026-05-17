import { useState } from 'react';
import { Search as SearchIcon, ArrowLeft, Mic, History, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';

export function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const RECENT = ['Milk', 'Avocado', 'Bread'];
  const POPULAR = ['Fresh Berries', 'Eggs', 'Chicken Breast', 'Organic Veggies'];

  const results = query
    ? MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="flex flex-col h-full bg-[var(--color-background)] font-body">
      {/* Header and Search Input */}
      <header className="p-6 bg-white border-b border-[var(--color-secondary)]/50 shadow-sm z-10 sticky top-0">
         <div className="flex items-center gap-3">
           <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full active:bg-gray-100">
             <ArrowLeft size={24} className="text-gray-600" />
           </button>
           
           <div className="flex-1 bg-gray-100 h-12 rounded-full flex items-center px-4 gap-2 focus-within:bg-[var(--color-background)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition-all">
             <SearchIcon size={20} className="text-gray-400" />
             <input 
               autoFocus
               type="text" 
               placeholder="Search groceries..."
               className="flex-1 bg-transparent border-none outline-none text-[var(--color-dark)] placeholder:text-gray-400 font-medium"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
             />
             {query ? (
               <button onClick={() => setQuery('')} className="p-1 active:opacity-50 text-gray-400">
                 <Mic size={18} className="opacity-0" />
               </button>
             ) : (
               <button className="p-1 active:opacity-50 text-gray-500">
                 <Mic size={20} />
               </button>
             )}
           </div>
         </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        {!query ? (
          <>
            {/* Empty State / Suggestions */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-gray-400 mb-4 px-1">
                <History size={16} />
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Recent Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RECENT.map(term => (
                  <button 
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-white border border-[var(--color-secondary)] px-4 py-2 rounded-full text-sm font-medium text-gray-700 active:bg-gray-50"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-4 px-1">
                <TrendingUp size={16} />
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Trending in Your Area</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map(term => (
                  <button 
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-white border border-[var(--color-secondary)] px-4 py-2 rounded-full text-sm font-medium text-gray-700 active:bg-gray-50"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xl mb-2 px-1">Results for "{query}"</h3>
            {results.length > 0 ? (
               results.map(product => (
                 <ProductCard key={product.id} productId={product.id} orientation="horizontal" />
               ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-medium">No products found.</p>
                <button 
                  onClick={() => setQuery('')}
                  className="mt-4 text-[var(--color-primary)] font-bold"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
