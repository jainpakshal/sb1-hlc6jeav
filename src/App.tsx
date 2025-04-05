import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { CareerDNA } from './pages/CareerDNA';
import { CareerPaths } from './pages/CareerPaths';
import { AImentor } from './pages/AImentor';
import { Roadmap } from './pages/Roadmap';
import { Wellness } from './pages/Wellness';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career-dna" element={<CareerDNA />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/ai-mentor" element={<AImentor />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/wellness" element={<Wellness />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;