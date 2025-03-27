import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto w-full px-6 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        
        <div>
          <h3 className="text-2xl font-serif mb-8">Arnaud BAYALE</h3>
          <address className="not-italic">
            <p>123 Demo Street</p>
            <p>Brooklyn, NY 12345</p>
          </address>
          <p className="mt-8">
            Made with{' '}
            <a href="#" className="underline hover:text-gray-600">
              Squarespace
            </a>
          </p>
        </div>

        
        <div>
          <h3 className="text-2xl font-serif mb-8">About</h3>
          <nav className="flex flex-col space-y-4">
            <Link href="/Work" className="hover:underline">Work</Link>
            <Link href="/about" className="hover:underline">Who I am</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </nav>
        </div>

        
        <div>
          <h3 className="text-2xl font-serif mb-8">Projects</h3>
          <nav className="flex flex-col space-y-4">
            <Link href="/residential" className="hover:underline">Application Mobile</Link>
            <Link href="/commercial" className="hover:underline">Site Web de Vente</Link>
            <Link href="/experiential" className="hover:underline">Application Recettes</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}