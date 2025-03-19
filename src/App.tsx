import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-dark-800 border-t border-dark-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">AgriTech</h3>
                <p className="text-gray-400">Connecting farmers and consumers for a sustainable future.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-primary-500">Products</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-primary-500">Farmers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-primary-500">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-primary-500">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-gray-400">Email: info@agritech.com</p>
                <p className="text-gray-400">Phone: +234 123 456 7890</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-dark-600 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} AgriTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;