import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            borderColor: ['#ff6b00', '#ffa500', '#ff6b00'],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-orange-500 rounded-full border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="bg-black text-gray-200">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;