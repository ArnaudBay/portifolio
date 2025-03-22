import Image from "next/image";
import imageSrc from "./assets/1.jpg";
import imageSrc2 from "./assets/2.jpg";
import imageSrc3 from "./assets/3.jpg";
import Link from "next/link";
///import Footer from "../Footer";

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
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800"
          href="/projects/project1"
        >
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
        <Link
          className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800"
          href="/projects/project2"
        >
          See project
        </Link>
      </div>

      <div className="mt-16 flex justify-center">
        <Image
          src={imageSrc3}
          alt="Description of the image"
          width={1100}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          className="px-6 py-4 bg-black text-white rounded-md hover:bg-gray-800"
          href="/projects/project3"
        >
          See project
        </Link>
      </div>

      
    </main>
  );
}
