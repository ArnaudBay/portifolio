import Image from "next/image";
import imageSrc from "./assets/1.jpg";

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
          width={600}
          height={200} 
          className="rounded-lg shadow-lg"
        />
        
      </div>
    </main>
  );
}
