import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    title: 'Premium Blend',
    description: 'Our signature botanical wellness blend.',
    price: '$29.99',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Wellness Package',
    description: 'Complete herbal wellness solution.',
    price: '$49.99',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Relaxation Mix',
    description: 'Natural calming botanical blend.',
    price: '$34.99',
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
  }
];

function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
        >
          Premium Products
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={product.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <span className="text-lg font-bold text-orange-400">{product.price}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Products;