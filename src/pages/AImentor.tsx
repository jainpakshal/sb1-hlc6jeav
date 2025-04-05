import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

export function AImentor() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Career Mentor</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Personal Career Assistant</h2>
              <p className="text-gray-600">Get instant guidance for your career journey</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 mb-4 h-96 overflow-y-auto bg-gray-50">
            <div className="text-center text-gray-500 mt-32">
              Start a conversation with your AI mentor
            </div>
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Ask me anything about your career path..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Career Guidance</h3>
            <p className="text-gray-600">Get personalized advice on career choices and paths</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Skill Development</h3>
            <p className="text-gray-600">Learn which skills to focus on for your desired career</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Industry Insights</h3>
            <p className="text-gray-600">Stay updated with the latest trends in your field</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Interview Prep</h3>
            <p className="text-gray-600">Get help preparing for job interviews</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}