import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
        >
          Contact Us
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-orange-500/20 rounded p-2 text-gray-200 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-orange-500/20 rounded p-2 text-gray-200 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-orange-500/20 rounded p-2 text-gray-200 focus:border-orange-500 focus:outline-none"
                  rows="4"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-black px-6 py-2 rounded font-bold hover:bg-orange-400"
                type="submit"
              >
                Send Message
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="font-bold text-orange-500">Email: </span>
                contact@optimistfarmacist.com
              </p>
              <p className="text-gray-400">
                <span className="font-bold text-orange-500">Phone: </span>
                (555) 123-4567
              </p>
              <p className="text-gray-400">
                <span className="font-bold text-orange-500">Hours: </span>
                Mon-Fri: 9AM - 5PM EST
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;