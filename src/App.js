import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar'; 
import Homepage from './Components/home'; 
import About from './Components/about'; 
import Gallery from './Components/gallery'; 
import Blog from './Components/blog'; 
import BlogDetail from './Components/blogDetail';
import Services from './Components/services'; 
import Contact from './Components/contact'; 
import Footer from './Components/footer';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.contactLine}>
          <div style={styles.contactText}>
            Contact Us: +91 8903000370 | hrlaboursjob@gmail.com
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the footer stays at the bottom
  },
  contactLine: {
    position: 'relative',
    height: '55px',
    background: '#B8860B',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contactText: {
    flex: 1,
    color: 'black',
    fontSize: '16px',
    textAlign: 'right',
    padding: '20px',
    position: 'relative',
    zIndex: 1,
  },
};
export default App;