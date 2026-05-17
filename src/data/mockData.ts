import { Product } from '../store/useStore';

export const CATEGORIES = [
  { id: '1', name: 'Fresh Veggies', icon: '🌽' },
  { id: '2', name: 'Dairy & Bread', icon: '🥛' },
  { id: '3', name: 'Snacks', icon: '🥨' },
  { id: '4', name: 'Meat & Seafood', icon: '🥩' },
  { id: '5', name: 'Fruits', icon: '🍎' },
];

export const MOCK_PRODUCTS: Product[] = [
  // Fruits
  { id: 'p1', name: 'Organic Hass Avocado', price: 3.99, originalPrice: 4.50, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fruits', unit: '2 pcs', stock: 24, tags: ['Fresh Today', 'Repeat Buy'] },
  { id: 'p6', name: 'Sweet Bananas', price: 1.99, image: 'https://images.unsplash.com/photo-1571501478200-2f92f9b2d308?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fruits', unit: '1 Bunch', stock: 50, tags: ['Bestseller'] },
  { id: 'p7', name: 'Red Apples', price: 4.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fruits', unit: '1 Bag', stock: 30, tags: [] },
  { id: 'p8', name: 'Strawberries', price: 5.99, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fruits', unit: '1 Pack', stock: 20, tags: ['Fresh Today'] },
  { id: 'p9', name: 'Seedless Grapes', price: 3.49, image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fruits', unit: '1 lb', stock: 40, tags: [] },

  // Dairy & Bread
  { id: 'p2', name: 'Fresh Whole Milk', price: 4.49, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400&h=400', category: 'Dairy & Bread', unit: '1 Gallon', stock: 12, tags: ['Trending'] },
  { id: 'p3', name: 'Artisan Sourdough Loaf', price: 6.99, image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=400&h=400', category: 'Dairy & Bread', unit: '1 Loaf', stock: 5, tags: ['Limited', 'Fresh Today'] },
  { id: 'p10', name: 'Salted Butter', price: 3.99, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=400&h=400', category: 'Dairy & Bread', unit: '1 lb', stock: 15, tags: [] },
  { id: 'p11', name: 'Greek Yogurt', price: 5.49, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=400', category: 'Dairy & Bread', unit: '32 oz', stock: 20, tags: ['Healthy'] },
  { id: 'p12', name: 'Cheddar Cheese Block', price: 4.99, image: 'https://images.unsplash.com/photo-1618164436241-4473940d1fce?auto=format&fit=crop&q=80&w=400&h=400', category: 'Dairy & Bread', unit: '8 oz', stock: 25, tags: [] },

  // Fresh Veggies
  { id: 'p4', name: 'Cherry Tomatoes', price: 2.99, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fresh Veggies', unit: '250g', stock: 30, tags: ['Repeat Buy'] },
  { id: 'p13', name: 'Organic Spinach', price: 3.49, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fresh Veggies', unit: '1 Bunch', stock: 18, tags: ['Fresh Today'] },
  { id: 'p14', name: 'Crisp Carrots', price: 1.99, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fresh Veggies', unit: '1 lb', stock: 40, tags: [] },
  { id: 'p15', name: 'Broccoli Crown', price: 2.49, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fresh Veggies', unit: '1 Head', stock: 22, tags: [] },
  { id: 'p16', name: 'Red Bell Peppers', price: 1.49, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=400&h=400', category: 'Fresh Veggies', unit: '1 pc', stock: 35, tags: [] },

  // Meat & Seafood
  { id: 'p5', name: 'Premium Salmon Fillet', price: 14.99, originalPrice: 16.99, image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=400&h=400', category: 'Meat & Seafood', unit: '0.5 lb', stock: 8, tags: ['Fresh Today'] },
  { id: 'p17', name: 'Chicken Breast', price: 8.99, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400&h=400', category: 'Meat & Seafood', unit: '1 lb', stock: 15, tags: ['Bestseller'] },
  { id: 'p18', name: 'Ground Beef', price: 7.49, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=400&h=400', category: 'Meat & Seafood', unit: '1 lb', stock: 20, tags: [] },
  { id: 'p19', name: 'Turkey Bacon', price: 5.99, image: 'https://images.unsplash.com/photo-1606850053617-640166d4076d?auto=format&fit=crop&q=80&w=400&h=400', category: 'Meat & Seafood', unit: '12 oz', stock: 12, tags: [] },
  { id: 'p20', name: 'Shrimp', price: 12.99, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=400&h=400', category: 'Meat & Seafood', unit: '1 lb', stock: 10, tags: ['Fresh Today'] },

  // Snacks
  { id: 'p21', name: 'Potato Chips', price: 2.99, image: 'https://images.unsplash.com/photo-1566478989037-e924e5020bf1?auto=format&fit=crop&q=80&w=400&h=400', category: 'Snacks', unit: '1 Bag', stock: 50, tags: [] },
  { id: 'p22', name: 'Roasted Almonds', price: 6.49, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=400&h=400', category: 'Snacks', unit: '8 oz', stock: 25, tags: ['Healthy'] },
  { id: 'p23', name: 'Dark Chocolate Bar', price: 3.49, image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=400&h=400', category: 'Snacks', unit: '1 pc', stock: 40, tags: [] },
  { id: 'p24', name: 'Popcorn', price: 4.99, image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=400&h=400', category: 'Snacks', unit: '1 Box', stock: 30, tags: [] },
  { id: 'p25', name: 'Rice Crackers', price: 2.49, image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400&h=400', category: 'Snacks', unit: '1 Pack', stock: 20, tags: [] }
];

export const FREQUENTLY_BOUGHT = ['p1', 'p2', 'p4'];
export const TODAYS_ESSENTIALS = ['p3', 'p5', 'p1'];
