import Image from "next/image";
import Footer from "../footer/footer";
import imageSrc from "../assets/srv.jpg";

export default function page() {
    return (
      <>
       <div className="px-12 pt-25  md:pt-25 grid gap-8  text-black ">
        <div className="pt-20  md:flex md:grid-cols-2  lg:grid-cols-2  grid gap-20 justify-between">
          <div className="pb-20 lg:pt-20 leading-8">
          <h1 className="text-3xl font-serif capitalize md:text-5xl pb-4">
            ours services
          </h1>
          <p className="pt-8 lg:w-150 leading-8  lg:text-[16px]  md:text-base tracking-wider">
          It all begins with an idea. Maybe you want to launch a business.
           Maybe you want to turn a hobby into something more. 
           Or maybe you have a creative project to share with the world. 
           Whatever it is, the way you tell your story online can make 
           all the difference.
          </p>
          </div>
          <div className="pb-20 lg:pt-20 leading-8">
            <h3 className="md:text-2xl text-xl  font-serif pb-4">
              Dream it.
            </h3>
            <p className="lg:w-130 pt-8 md:pb-4 lg:text-[16px]   tracking-wider">
            It all begins with an idea. Maybe you want to launch a business.
             Maybe you want to turn a hobby into something more.
              Or maybe you have a creative project to share with the world. 
              Whatever it is, the way you tell your story online can make all 
              the difference.
            </p>
          </div>

          
          
        </div>

        <div className="flex justify-end">
        
          <div className=" pb-20  md:pt-25 ">
            <h3 className="md:text-2xl text-2xl font-serif pb-4">
              Build it.
            </h3>
            
            <p className="lg:w-130 pt-8   leading-8 lg:text-[16px] md:text- md:text-b tracking-wider">
            It all begins with an idea. Maybe you want to launch a business. 
            Maybe you want to turn a hobby into something more. 
            Or maybe you have a creative project to share with the world. 
            Whatever it is, the way you tell your story online can make all 
            the difference.
            </p>
            
            
          </div>
        </div>

        <div className="flex justify-end pb-25">
        
          <div className="  md:pt-25  ">
            <h3 className="md:text-2xl text-xl  font-serif pb-4">
              Grow it.
            </h3>
            
            <p className="lg:w-130 pt-8 lg:text-[16px]  leading-8  md:pb-20  tracking-wider">
            It all begins with an idea. Maybe you want to launch a business. 
            Maybe you want to turn a hobby into something more. 
            Or maybe you have a creative project to share with the world. 
            Whatever it is, the way you tell your story online can make all 
            the difference.
            </p>
            
            
          </div>
        </div>

        <div className=" pt-20 pb-10">
          <Image
          src={imageSrc}
          alt=""
          width={1500}
          height={200}
          className="object-cover md:h-175 "
          />
        </div>
      </div>

        <div>
          <Footer/>
        </div>  
     </>
    );
  }
  