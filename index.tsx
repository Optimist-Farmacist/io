import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, ShoppingCart, User, Home, Menu, X } from 'lucide-react';

const HerbShop = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const products = [
    { id: 1, name: "Premium Herbs Blend", price: 29.99, description: "Signature botanical blend" },
    { id: 2, name: "Relaxation Mix", price: 24.99, description: "Calming herbal blend" },
    { id: 3, name: "Energy Boost", price: 27.99, description: "Natural vitality blend" },
    { id: 4, name: "Wellness Package", price: 34.99, description: "Complete herbal package" }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navigation */}
      <nav className="bg-black border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/api/placeholder/40/40"
                alt="Monkey Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                OPTIMIST FARMACIST
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Button>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-400" onClick={() => setShowLogin(true)}>
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                className="text-orange-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-orange-500/20 px-4 py-2">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-orange-500 justify-start">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Button>
              <Button variant="ghost" className="text-orange-500 justify-start" onClick={() => setShowLogin(true)}>
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
              <Button variant="ghost" className="text-orange-500 justify-start">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {showLogin ? (
          <Card className="max-w-md mx-auto p-6 bg-gray-900 border-orange-500/20">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Login</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-orange-400">Email</label>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-black border-orange-500/20 text-gray-200"
                />
              </div>
              <div>
                <label className="block mb-2 text-orange-400">Password</label>
                <Input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="bg-black border-orange-500/20 text-gray-200"
                />
              </div>
              <Button className="w-full bg-orange-500 text-black hover:bg-orange-400">
                Sign In
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-500/10"
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </Button>
            </div>
          </Card>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-orange-500">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <CardContent className="p-4">
                    <div className="bg-black/50 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-orange-500/20" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-orange-500">{product.name}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-400">${product.price}</span>
                      <Button className="bg-orange-500 text-black hover:bg-orange-400">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 p-8 mt-16 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">About Us</h3>
            <p>Premium medicinal herbs since 2024</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Contact</h3>
            <p>Email: contact@optimistfarmacist.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Follow Us</h3>
            <p>Find us on social media</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HerbShop;
