import { create } from 'zustand';
import { Product } from '../types';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    farmerId: 'farmer-1',
    name: 'Fresh Tomatoes',
    description: 'Locally grown organic tomatoes',
    price: 500,
    quantity: 100,
    unit: 'kg',
    category: 'vegetables',
    images: ['https://images.unsplash.com/photo-1518977676601-b53f82aba655'],
    available: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    farmerId: 'farmer-1',
    name: 'Sweet Corn',
    description: 'Fresh sweet corn from local farms',
    price: 300,
    quantity: 50,
    unit: 'kg',
    category: 'vegetables',
    images: ['https://images.unsplash.com/photo-1551754655-cd27e38d2076'],
    available: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      set({ products: mockProducts, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch products', loading: false });
    }
  }
}));