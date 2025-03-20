'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Menu() {
  const [activeItem, setActiveItem] = useState('Work');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Work', 'About', 'Our Services', 'Projects'];

  return (
    <header className="w-full px-6 py-8">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif z-10">
          Bergen
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 sm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Items - Mobile & Desktop */}
        <div
          className={`${
            isOpen
              ? 'fixed inset-0 bg-white flex items-center justify-center'
              : 'hidden'
          } sm:relative sm:flex sm:items-center sm:gap-12`}
        >
          <ul className="flex flex-col items-center gap-8 sm:flex-row">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`relative py-2 text-base ${
                    activeItem === item
                      ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => {
                    setActiveItem(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
            {/* Contact Button - Mobile */}
            <li className="sm:hidden">
              <Link
                href="/contact"
                className="px-6 py-3 bg-black text-white rounded-full text-base hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Contact Button - Desktop */}
          <Link
            href="/contact"
            className="hidden sm:block px-6 py-3 bg-black text-white rounded-full text-base hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}