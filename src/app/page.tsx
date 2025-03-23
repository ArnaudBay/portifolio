import Image from "next/image";
import Link from "next/link";
import Footer from "./footer/footer"; // Assurez-vous que le chemin est correct
//import work from './Work/page';

// Import des images
import imageSrc from "./assets/1.jpg";
import imageSrc2 from "./assets/2.jpg";
import imageSrc3 from "./assets/3.jpeg";
//import Page from "./Work/page";

export default function Home() {
  return (
    <main className="px-6 py-20">
      
      
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-lg mb-8">Notre Mission</p>
        <h1 className="text-5xl font-serif leading-tight">
          Creating spaces that are<br />
          comfortable, memorable and<br />
          inspiring.
        </h1>
      </div>

      
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc}
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-7  flex justify-end ">
        <Link href="/projet" className="px-11 py-4 bg-cyan-600 text-white rounded-full hover:bg-gray-800">
          See project
        </Link>
      </div>

      
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc2}
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="/projet" className="px-6 py-4 bg-cyan-600 text-white rounded-full hover:bg-gray-800">
          See project
        </Link>
      </div>

      
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc3}
          alt="Description of the image"
          width={1000}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      
      <section className="mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-5xl font-serif">Experiential Design</h2>
            <Link href="/projet" className="px-6 py-4 bg-cyan-600 text-white rounded-full hover:bg-gray-800 justify-items-center ">
              See project
            </Link>
          </div>
          <p className="text-xl text-gray-700">Temporary and permanent branded spaces.</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}