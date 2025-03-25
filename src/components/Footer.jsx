import { motion } from 'framer-motion';

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-black border-t border-orange-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-4">Optimist Farmacist</h4>
            <p className="text-gray-400">Premium medicinal herbs and botanical wellness solutions.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-orange-500/20 rounded p-2 text-gray-200 focus:border-orange-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-black px-4 py-2 rounded font-bold hover:bg-orange-400 w-full"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-500/20 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Optimist Farmacist. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Website crafted by{' '}
            <a 
              href="https://www.skunkworksdigital.co.za/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Skunkworks Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;