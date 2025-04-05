import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle, Clock, Award, BookOpen, Briefcase } from 'lucide-react';

export function Roadmap() {
  const milestones = [
    {
      title: 'Foundation Skills',
      status: 'completed',
      items: [
        'Career DNA Assessment',
        'Learning Style Analysis',
        'Core Skills Evaluation'
      ]
    },
    {
      title: 'Education Path',
      status: 'in-progress',
      items: [
        'Bachelor\'s Degree Selection',
        'Relevant Certifications',
        'Specialized Training'
      ]
    },
    {
      title: 'Skill Development',
      status: 'upcoming',
      items: [
        'Technical Skills',
        'Soft Skills',
        'Industry-Specific Knowledge'
      ]
    },
    {
      title: 'Professional Experience',
      status: 'upcoming',
      items: [
        'Internships',
        'Entry-Level Positions',
        'Career Advancement'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4 mb-8">
          <Map className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Your Career Roadmap</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Progress Overview</h2>
              <p className="text-gray-600">Track your journey to career success</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative pl-8 ${
                  index !== milestones.length - 1 ? 'pb-8 border-l-2 border-indigo-100' : ''
                }`}
              >
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500" />
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    {milestone.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                    {milestone.status === 'in-progress' && <Clock className="h-5 w-5 text-yellow-500 mr-2" />}
                    {milestone.title}
                  </h3>
                  <ul className="space-y-2">
                    {milestone.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Award className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <p className="text-gray-600">Track your milestones and certifications</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <BookOpen className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Learning Path</h3>
            <p className="text-gray-600">Recommended courses and resources</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Briefcase className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Job Opportunities</h3>
            <p className="text-gray-600">Relevant positions based on your progress</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}