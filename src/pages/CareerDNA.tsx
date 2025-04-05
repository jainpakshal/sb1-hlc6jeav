import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export function CareerDNA() {
  const { setAssessmentComplete } = useStore();

  const handleStartAssessment = () => {
    // In a real app, this would navigate to the assessment flow
    // For now, we'll just toggle the assessment state
    setAssessmentComplete(true);
    alert('Assessment started! This is a placeholder for the actual assessment flow.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Discover Your Career DNA</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Interactive Assessment</h2>
          <p className="text-gray-600 mb-6">
            Complete our comprehensive assessment to uncover your unique career DNA profile.
            This will help us provide personalized career recommendations tailored to your
            interests, personality, and aptitude.
          </p>
          <button 
            onClick={handleStartAssessment}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Start Assessment</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Your Interests</h3>
            <p className="text-gray-600">Complete the assessment to discover your interests</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Personality Type</h3>
            <p className="text-gray-600">Complete the assessment to learn about your personality</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Learning Style</h3>
            <p className="text-gray-600">Complete the assessment to understand your learning style</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Career Archetypes</h3>
            <p className="text-gray-600">Complete the assessment to see your career archetypes</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}