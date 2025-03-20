'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [activeItem, setActiveItem] = useState('Work');

  const menuItems = ['Work', 'About', 'Our Services', 'Projects'];

  return (
    <header className="w-full px-6 py-8">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif">
          Bergen
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`relative py-2 text-base ${
                    activeItem === item
                      ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white  text-base hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}