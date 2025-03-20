import Image from "next/image";
import imageSrc from "./assets/1.jpg";
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
    </main>
  );
}
