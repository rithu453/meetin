// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Food from './components/Food';
import Coding from './components/Coding';
import Dance from './components/Dance';
import Music from './components/Music';
import Fitness from './components/Fitness';
import Books from './components/Books';
import './App.css';
import Register from './log/Registers';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/food" element={<Food />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/dance" element={<Dance />} />
            <Route path="/music" element={<Music />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/books" element={<Books />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
