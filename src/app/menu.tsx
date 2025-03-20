'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [activeItem, setActiveItem] = useState('Work');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Work', 'About', 'Our Services', 'Projects'];

  return (
    <header className="w-full px-6 py-8">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif">
          Bergen
        </Link>

        {/* Burger Menu Button */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Items */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-20 left-0 w-full bg-white shadow-md md:static md:flex md:items-center md:gap-12 md:shadow-none`}
        >
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
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
                    setIsMenuOpen(false); // Close menu on click
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="block px-7 py-4 bg-black text-white text-base hover:bg-gray-800 transition-colors md:inline-block"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}