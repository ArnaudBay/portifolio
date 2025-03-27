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
        <Link href="/" className="text-2xl font-serif">
          <strong>Arnaud BAYALE.</strong>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 sm:hidden"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>

        <div
          className={`fixed inset-0 bg-white sm:relative sm:bg-transparent ${
            isOpen ? 'flex' : 'hidden sm:flex'
          } items-center justify-center`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Link
              href="/Work"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Services"
              className="text-lg hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-lg hover:text-gray-600">Projects</button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                  <Link
                    href="/apkMobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Application Mobile
                  </Link>
                  <Link
                    href="/SiteWeb"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Site Web de Vente
                  </Link>
                  <Link
                    href="/apkRecettes"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Application Recettes
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Me Contacter.
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}