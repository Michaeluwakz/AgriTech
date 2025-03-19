import { Link } from 'react-router-dom';
import { Sprout, ShoppingCart, User, Menu, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { useState } from 'react';

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-800 border-b border-dark-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">AgriTech</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <Link to="/farmers" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Farmers
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-md leading-5 bg-dark-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="ml-4">
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-2">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-700"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-700">
              Products
            </Link>
            <Link to="/farmers" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-700">
              Farmers
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-700">
              About
            </Link>
            <div className="relative mt-3 px-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-md leading-5 bg-dark-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Link to="/auth" className="block px-3 py-2 mt-4">
              <Button variant="outline" className="w-full">
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}