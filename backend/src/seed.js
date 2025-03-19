import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import User from './models/User.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create a test farmer
    const farmer = await User.create({
      email: 'farmer@test.com',
      role: 'farmer',
      fullName: 'Test Farmer'
    });

    // Create test products
    const products = [
      {
        name: 'Fresh Tomatoes',
        description: 'Locally grown organic tomatoes',
        price: 500,
        quantity: 100,
        unit: 'kg',
        category: 'vegetables',
        farmerId: farmer._id,
        images: ['https://images.unsplash.com/photo-1518977676601-b53f82aba655'],
        available: true
      },
      {
        name: 'Sweet Corn',
        description: 'Fresh sweet corn from local farms',
        price: 300,
        quantity: 50,
        unit: 'kg',
        category: 'vegetables',
        farmerId: farmer._id,
        images: ['https://images.unsplash.com/photo-1551754655-cd27e38d2076'],
        available: true
      }
    ];

    await Product.insertMany(products);
    console.log('Test data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();