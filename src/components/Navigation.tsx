import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Compass, Notebook as Robot, Map, Heart } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/career-dna', icon: Brain, label: 'Career DNA' },
    { path: '/career-paths', icon: Compass, label: 'Career Paths' },
    { path: '/ai-mentor', icon: Robot, label: 'AI Mentor' },
    { path: '/roadmap', icon: Map, label: 'Roadmap' },
    { path: '/wellness', icon: Heart, label: 'Wellness' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Career Pathfinder</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === path
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}