import React from 'react';
import { Home, Wrench, Calendar, Settings, LogIn, UserPlus } from 'lucide-react';
import Button from './Button';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'booking', label: 'Booking', icon: Calendar },
    { id: 'dashboard', label: 'Dashboard', icon: Settings }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Wrench className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">ServiceHub</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="small"
              onClick={() => setCurrentPage('login')}
            >
              <LogIn className="w-4 h-4 mr-1" />
              Login
            </Button>
            <Button
              size="small"
              onClick={() => setCurrentPage('register')}
            >
              <UserPlus className="w-4 h-4 mr-1" />
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;