import React, {useState} from 'react'
import logo from "@/assets/images/wibicon_rbg.png";
import { companyInfo } from '@/data/companyData';
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const Footer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img
                src={logo}
                width={100}
                height={100}
                alt="Company Logo"
              />
              {/* <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl" style={{ backgroundColor: '#02b1f3' }}>
                  B
                </div>
                <div>
                  <div className="font-bold text-xl">{companyInfo.name}</div>
                  <div className="text-sm text-gray-400">{companyInfo.tagline}</div>
                </div>
              </div> */}
              <p className="text-gray-400 text-sm leading-relaxed">
                Partner terpercaya untuk implementasi ERP di Indonesia
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-[#02b1f3] transition-colors">Customization</a></li>
                <li><a href="#services" className="hover:text-[#02b1f3] transition-colors">Consulting</a></li>
                <li><a href="#services" className="hover:text-[#02b1f3] transition-colors">Training</a></li>
                <li><a href="#services" className="hover:text-[#02b1f3] transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#02b1f3] transition-colors cursor-pointer">Tentang Kami</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-[#02b1f3] transition-colors cursor-pointer">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#02b1f3] transition-colors cursor-pointer">Kontak</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{companyInfo.email}</li>
                <li>{companyInfo.phone}</li>
                <li className="pt-2">
                  <div className="flex space-x-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#02b1f3] transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#02b1f3] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#02b1f3] transition-colors">
                            <Facebook className="w-5 h-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#02b1f3] transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
