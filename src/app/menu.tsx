'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
       
        <Link href="/" className="text-2xl font-serif">
          ArnaudBay
        </Link>

        {/* Btn menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 sm:hidden"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>

        {/* menu */}
        <div
          className={`fixed inset-0 bg-white sm:relative sm:bg-transparent ${
            isOpen ? 'flex' : 'hidden sm:flex'
          } items-center justify-center`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Link
              href="/work"
              className={`text-lg hover:text-gray-600 ${
                pathname === '/work' ? 'underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-lg hover:text-gray-600 ${
                pathname === '/about' ? 'underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-lg hover:text-gray-600 ${
                pathname === '/services' ? 'underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Liste proj */}
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button
                className={`text-lg hover:text-gray-600 ${
                  pathname.startsWith('/projects') ? 'underline' : ''
                }`}
              >
                Projects
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                  <Link
                    href="/projects/project1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   Application Mobile
                  </Link>
                  <Link
                    href="/projects/project2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Application Web
                  </Link>
                  <Link
                    href="/projects/project3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Application Desktop
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-10 py-4 bg-black text-white rounded-md hover:bg-gray-800 ${
                pathname === '/contact' ? 'underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}