import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <Header />
        <main className="py-12 px-4 max-w-7xl mx-auto">
          <Categories />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;