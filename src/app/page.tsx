import Image from "next/image";
import Link from "next/link";
import Footer from "./footer"; // Assurez-vous que le chemin est correct

// Import des images
import imageSrc from "./assets/1.jpg";
import imageSrc2 from "./assets/2.jpg";
import imageSrc3 from "./assets/3.jpeg";

export default function Home() {
  return (
    <main className="px-6 py-20">
      {/* Section Mission */}
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-lg mb-8">Our Mission</p>
        <h1 className="text-6xl font-serif leading-tight">
          Creating spaces that are<br />
          comfortable, memorable and<br />
          inspiring.
        </h1>
      </div>

      {/* Image 1 */}
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc}
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="/about" className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800">
          See project
        </Link>
      </div>

      {/* Image 2 */}
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
        <Link href="/about" className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800">
          See project
        </Link>
      </div>

      {/* Image 3 */}
      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc3}
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Project Section */}
      <section className="mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-5xl font-serif">Experiential Design</h2>
            <Link href="/about" className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800">
              See project
            </Link>
          </div>
          <p className="text-xl text-gray-700">Temporary and permanent branded spaces.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}