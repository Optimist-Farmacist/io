import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="hero-pattern min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          >
            OPTIMIST FARMACIST
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Premium Medicinal Herbs & Botanical Wellness
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="https://raw.githubusercontent.com/Optimist-Farmacist/io/refs/heads/main/0aaeb945-5eb0-47ec-b775-6d7b81a103b0.jpeg"
            alt="Optimist Farmacist"
            className="w-64 h-64 mx-auto mb-8 rounded-lg shadow-lg shadow-orange-500/20"
          />

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-black px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-400 transition-all"
          >
            Explore Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Hero;