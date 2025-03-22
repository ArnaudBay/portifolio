import Image from "next/image";
import imageSrc from "./assets/1.jpg";
import imageSrc2 from "./assets/2.jpg";
import imageSrc3 from "./assets/3.jpg";
import Link from "next/link";
import Footer from "./footer";

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
       {/* Project Section */}
       <section className="mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-5xl font-serif">Experiential Design</h2>
              <div className="mt-8 flex justify-end">
      <Link  className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800" href={""} 
        >
          See project
        </Link>
        </div>
            </div>
            <p className="text-xl text-gray-700">Temporary and permanent branded spaces.</p>
          </div>
        </section>

        <Footer/>
    </main>
  );
}
