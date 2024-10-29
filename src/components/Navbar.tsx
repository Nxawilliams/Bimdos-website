import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all ${
    isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : ''
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span>Bimdos</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {location.pathname === '/' ? (
              <>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
              </>
            ) : (
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            )}
            <Link
              to="/start-project"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {location.pathname === '/' ? (
                <>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#process"
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Process
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                to="/start-project"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}