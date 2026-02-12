import React, { useState } from 'react';
import logo from "@/assets/images/wibicon.jpeg";
import { Button } from '../../components/ui/button';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img
              src={logo}
              width={100}
              height={100}
              alt="Company Logo"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#02b1f3] transition-colors font-medium cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#02b1f3] transition-colors font-medium cursor-pointer">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#02b1f3] transition-colors font-medium cursor-pointer">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#02b1f3] transition-colors font-medium cursor-pointer">Kontak</button>
              <Button onClick={() => scrollToSection('contact')} style={{ backgroundColor: '#02b1f3' }} className="hover:opacity-90 transition-opacity cursor-pointer">
                Konsultasi Gratis
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-[#02b1f3] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-[#02b1f3] transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-[#02b1f3] transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#02b1f3] transition-colors">Kontak</button>
              <Button onClick={() => scrollToSection('contact')} style={{ backgroundColor: '#02b1f3' }} className="w-full hover:opacity-90 transition-opacity">
                Konsultasi Gratis
              </Button>
            </nav>
          )}
        </div>
    </header>
  )
}

export default Header
