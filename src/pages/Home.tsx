import { useState } from 'react';
import { ChevronRight, Leaf, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
  images: string[];
}

export default function Home() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Fresh Tomatoes',
      description: 'Locally grown organic tomatoes, perfect for salads and cooking.',
      price: 500,
      quantity: 100,
      unit: 'kg',
      category: 'vegetables',
      images: ['https://images.unsplash.com/photo-1518977676601-b53f82aba655']
    },
    {
      id: '2',
      name: 'Sweet Corn',
      description: 'Fresh sweet corn from local farms, harvested at peak ripeness.',
      price: 300,
      quantity: 50,
      unit: 'kg',
      category: 'vegetables',
      images: ['https://images.unsplash.com/photo-1551754655-cd27e38d2076']
    },
    {
      id: '3',
      name: 'Organic Carrots',
      description: 'Fresh organic carrots from local farms, rich in vitamins and minerals.',
      price: 250,
      quantity: 80,
      unit: 'kg',
      category: 'vegetables',
      images: ['https://images.unsplash.com/photo-1447175008436-054170c2e979']
    },
    {
      id: '4',
      name: 'Fresh Peppers',
      description: 'Colorful bell peppers, locally grown and perfect for adding flavor to any dish.',
      price: 450,
      quantity: 60,
      unit: 'kg',
      category: 'vegetables',
      images: ['https://images.unsplash.com/photo-1563565375-f3fdfdbefa83']
    },
    {
      id: '5',
      name: 'Organic Spinach',
      description: 'Fresh organic spinach, packed with nutrients and perfect for salads or cooking.',
      price: 350,
      quantity: 40,
      unit: 'kg',
      category: 'vegetables',
      images: ['https://images.unsplash.com/photo-1576045057995-568f588f82fb']
    },
    {
      id: '6',
      name: 'Fresh Cassava',
      description: 'Locally grown cassava roots, perfect for traditional Nigerian dishes.',
      price: 400,
      quantity: 120,
      unit: 'kg',
      category: 'tubers',
      images: ['https://images.unsplash.com/photo-1598512752271-33f913a5af13']
    }
  ]);

  const categories = [
    { name: 'Vegetables', image: 'https://images.unsplash.com/photo-1557844352-761f2565b576' },
    { name: 'Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf' },
    { name: 'Grains', image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21' },
    { name: 'Tubers', image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-dark-900 min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fresh Farm Products Directly To Your Table
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with local farmers and get fresh, organic produce delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AgriTech?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're revolutionizing the agricultural supply chain in Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="bg-primary-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fresh & Organic</h3>
              <p className="text-gray-400">
                All our products are fresh, organic, and sourced directly from local farmers.
              </p>
            </div>
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="bg-primary-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fair Prices</h3>
              <p className="text-gray-400">
                By eliminating middlemen, we ensure farmers get fair prices and consumers save money.
              </p>
            </div>
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="bg-primary-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support Local</h3>
              <p className="text-gray-400">
                Every purchase supports local farmers and strengthens the community.
              </p>
            </div>
            <div className="bg-dark-700 p-6 rounded-lg">
              <div className="bg-primary-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
              <p className="text-gray-400">
                We verify all products for quality and freshness before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Categories</h2>
            <Button variant="ghost" className="text-primary-500 hover:text-primary-400 flex items-center">
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="relative rounded-lg overflow-hidden group h-40 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <Button variant="ghost" className="text-primary-500 hover:text-primary-400 flex items-center">
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-dark-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {product.images && product.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-500 font-bold text-lg">₦{product.price.toFixed(2)}</span>
                    <span className="text-gray-400 text-sm">{product.quantity} {product.unit} available</span>
                  </div>
                  <Button className="mt-4 w-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of customers who are already enjoying fresh farm products delivered directly to their doorstep.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary-600 hover:bg-gray-100 text-lg"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
}