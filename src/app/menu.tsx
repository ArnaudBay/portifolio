'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full px-5 py-3 fixed bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif">
          <strong>Arnaud BAYALE.</strong>
        </Link>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 sm:hidden"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>

        {/* Menu Items */}
        <div
          className={`fixed inset-0 bg-white sm:relative sm:bg-transparent ${
            isOpen ? 'flex' : 'hidden sm:flex'
          } items-center justify-center`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Link
              href="/Work"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              About
            </Link>
            <Link
              href="/Services"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              Services
            </Link>

            {/* Dropdown for Projects */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-lg hover:text-gray-600">Projects</button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                  <Link
                    href="/ApkMobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)} // Ferme le menu après un clic
                  >
                    Application Mobile
                  </Link>
                  <Link
                    href="/SiteWeb"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)} // Ferme le menu après un clic
                  >
                    Site Web de Vente
                  </Link>
                  <Link
                    href="/ApkRecettes"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)} // Ferme le menu après un clic
                  >
                    Application Recettes
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-gray-800"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              Me Contacter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}