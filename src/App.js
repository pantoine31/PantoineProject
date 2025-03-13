import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';

import posts from './components/posts.json'; // save articles into posts.json

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BlogList posts={posts} />} />
            <Route path="/post/:id" element={<BlogPost posts={posts} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
