'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/#services" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link 
              href="/#faq" 
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
