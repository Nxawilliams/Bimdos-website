import React from 'react';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = {
  services: ['Web Development', 'Web Applications', 'UI/UX Design', 'Security & Maintenance'],
  company: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'],
  social: ['Twitter', 'LinkedIn', 'GitHub', 'Instagram']
};

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span>Bimdos</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Building digital excellence for modern businesses through innovative web solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Bimdosxd@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (246) 258-2682</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Bridgetown, Barbados</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {links.social.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Bimdos. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}