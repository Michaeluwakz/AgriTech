export type UserRole = 'farmer' | 'retailer' | 'consumer' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  created_at: string;
  avatar_url?: string;
  verified: boolean;
}

export interface Product {
  id: string;
  farmerId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
  images: string[];
  available: boolean;
  createdAt: string;
  updatedAt: string;
}