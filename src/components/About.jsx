import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      title: 'Premium Quality',
      description: 'Only the finest botanical selections'
    },
    {
      title: 'Expert Selection',
      description: 'Curated by herbal specialists'
    },
    {
      title: 'Global Sourcing',
      description: 'Best ingredients worldwide'
    }
  ];

  return (
    <section id="about" className="py-20 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-orange-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">About Us</h2>
          <p className="text-gray-400 text-lg mb-6">
            Optimist Farmacist is dedicated to providing premium quality medicinal herbs and botanical wellness solutions. 
            Our carefully curated selection of products combines traditional wisdom with modern wellness practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-4"
              >
                <h3 className="text-xl font-bold text-orange-500 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;