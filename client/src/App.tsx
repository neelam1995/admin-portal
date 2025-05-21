import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';
import './layout/Layout.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-md">
          Tailwind is finally working 🎉
        </div>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
