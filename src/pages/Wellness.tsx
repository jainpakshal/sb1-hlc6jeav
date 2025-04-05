import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Dumbbell, Coffee, Moon, Battery } from 'lucide-react';

export function Wellness() {
  const wellnessMetrics = [
    {
      icon: Brain,
      label: 'Mental Clarity',
      value: 85,
      color: 'bg-blue-500',
    },
    {
      icon: Battery,
      label: 'Energy Level',
      value: 70,
      color: 'bg-green-500',
    },
    {
      icon: Moon,
      label: 'Sleep Quality',
      value: 75,
      color: 'bg-purple-500',
    },
  ];

  const wellnessTips = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Set clear boundaries between work and personal time',
      action: 'Track Balance',
    },
    {
      icon: Dumbbell,
      title: 'Stress Management',
      description: 'Practice mindfulness and relaxation techniques',
      action: 'Start Session',
    },
    {
      icon: Coffee,
      title: 'Break Reminders',
      description: 'Take regular breaks to maintain productivity',
      action: 'Set Reminder',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4 mb-8">
          <Heart className="h-8 w-8 text-rose-500" />
          <h1 className="text-3xl font-bold text-gray-900">Career Wellness Center</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {wellnessMetrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-6 w-6 text-gray-600" />
                <span className="text-2xl font-bold text-gray-900">{metric.value}%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{metric.label}</h3>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${metric.color}`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Wellness Check-in</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How are you feeling today?
              </label>
              <div className="flex space-x-4">
                {['😔', '😐', '🙂', '😊', '🤗'].map((emoji) => (
                  <button
                    key={emoji}
                    className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your stress level?
              </label>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <button className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors duration-200">
              Save Check-in
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {wellnessTips.map((tip) => (
            <div key={tip.title} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <tip.icon className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tip.description}</p>
              <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                {tip.action}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}