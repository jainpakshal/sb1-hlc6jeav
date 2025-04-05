import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Compass, Notebook as Robot, Map, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Brain,
      title: 'Career DNA Profile',
      description: 'Discover your unique career DNA through our AI-powered assessment',
      path: '/career-dna',
    },
    {
      icon: Compass,
      title: 'Career Paths',
      description: 'Explore traditional, modern, and emerging career opportunities',
      path: '/career-paths',
    },
    {
      icon: Robot,
      title: 'AI Mentor',
      description: 'Get personalized guidance from our intelligent career assistant',
      path: '/ai-mentor',
    },
    {
      icon: Map,
      title: 'Custom Roadmap',
      description: 'Follow your personalized path to career success',
      path: '/roadmap',
    },
    {
      icon: Heart,
      title: 'Wellness Support',
      description: 'Balance your career journey with mental wellness',
      path: '/wellness',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Smart Career Pathfinder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Self-Discovery to Career Mastery — Powered by AI, Backed by Science
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => navigate(feature.path)}
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <button
          onClick={() => navigate('/career-dna')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Start Your Journey
        </button>
      </motion.div>
    </div>
  );
}