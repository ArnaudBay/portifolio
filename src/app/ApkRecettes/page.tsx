"use client"

import React from "react";
import Image from "next/image";
import Footer from "../footer/footer";

export default function page () {
  return (
    <>
      <div className="pt-45 min-h-screen text-black">
        <div className="grid md:gap-20 gap-8  pb-25  md:pt-25 px-12    md:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl md:text-5xl">
            Application Recettes
            </h1>
          </div>
          <div >
            <p className="tracking-wide text-[16px] lg:tracking-wider lg:w-165 lg:text-[16.5px]  pb-20 text-base leading-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sit amet ex vel lectus aliquet porttitor. 
            Proin sollicitudin vitae purus at cursus. 
            Nullam suscipit ultricies lectus in efficitur. 
            Phasellus hendrerit enim lectus. 
            Nunc vitae eleifend metus. 
            <br /> <br /> 
            <span>
            Vestibulum ante ipsum primis in faucibus orci luctus et
             ultrices posuere cubilia Curae; Vivamus eu vehicula felis, 
             vel congue purus. Integer ut elit feugiat sem semper mollis. 
             Etiam malesuada eros turpis, id dignissim justo dictum et. 
             Ut a nisl sed mauris luctus dapibus sed ut lacus. 
             Phasellus sit amet neque tortor. Donec sit amet risus viverra, 
             vulputate arcu et, pellentesque risus.
            </span>
            </p>
          </div>
        </div>

        <div className="px-12 pt-25 xs:pt-20 md:grid md:gap-4 md:grid-cols-2 grid gap-2 grid-cols-2">
          
          
        <div >
            <Image
            src="/Exper1.jpeg" 
            alt=""
            width={500}
            height={200}
            className="h-75 lg:h-175 lg:w-200"
            />
          </div>

          <div>
            <Image
            src="/Exper2.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75 lg:h-175 lg:w-200"
            />
          </div>

          <div>
            <Image
            src="/Exper3.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75 lg:h-175 lg:w-200"
            />
          </div>

          <div>
            <Image
            src="/Exper4.jpg"
            alt=""
            width={500}
            height={200}
            className="h-75 lg:h-175 lg:w-200"
            />
          </div>
        </div>

        <div className="pt-15 px-12 tracking-tighte pb-12 ">
          <div className="grid gap-8">
          <div>
            <h4 className="text-2xl font-serif tracking-wider">
              Credits
            </h4>
          </div>
          <div>
            <p className="pb-2">
              Firsname Lastname
            </p>
            <p>
              Title / Role
            </p>
          </div>

          <div>
            <p className="pb-2">
             Firstname Lastname 
            </p>
            <p>
              Title / Role
            </p>
          </div>

          <div>
            <p className="pb-2">
             Firstname Lastname 
            </p>
            <p>
              Title / Role
            </p>
          </div>

          </div>

          
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </>
    
)
};
