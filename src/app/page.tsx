import Image from "next/image";
import imageSrc from "./assets/1.jpg";
import imageSrc2 from "./assets/2.jpg";
import imageSrc3 from "./assets/3.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-lg mb-8">Our Mission</p>
        <h1 className="text-6xl font-serif leading-tight">
          Creating spaces that are<br />
          comfortable, memorable and<br />
          inspiring.
        </h1>
      </div>

      
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc}
          //src="./1.jpg" 
          alt="Description of the image"
          width={1100}
          height={200} 
          className="rounded-lg shadow-lg"
        />
       
      </div>
      <div className="mt-8 flex justify-end">
      <Link  className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800" href={""} 
        >
          See project
        </Link>
        </div>

        <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc2}
          //src="./1.jpg" 
          alt="Description of the image"
          width={1100}
          height={200} 
          className="rounded-lg shadow-lg"
        />
       
      </div>
      <div className="mt-8 flex justify-end">
      <Link  className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800" href={""} 
        >
          See project
        </Link>
        </div>

        <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc}
          //src="./1.jpg" 
          alt="Description of the image"
          width={1100}
          height={200} 
          className="rounded-lg shadow-lg"
        />
       
      </div>
      <div className="mt-8 flex justify-end">
      <Link  className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800" href={""} 
        >
          See project
        </Link>
        </div>

         {/* Footer */}
      <footer className="px-6 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          


          <div>
            <h3 className="text-2xl font-serif mb-8">Arnaud</h3>
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
              <a href="/work" className="hover:underline">Work</a>
              <a href="/who-we-are" className="hover:underline">Who We Are</a>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </nav>
          </div>

         
          <div>
            <h3 className="text-2xl font-serif mb-8">Projects</h3>
            <nav className="flex flex-col space-y-4">
              <a href="/residential" className="hover:underline">Residential Design</a>
              <a href="/commercial" className="hover:underline">Commercial Design</a>
              <a href="/experiential" className="hover:underline">Experiential Design</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
