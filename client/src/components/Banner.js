import Image from "next/image";
import React from "react";
import bannerImage from '@/image/illustration-working.svg'
function Banner() {
  return (
    <main className="flex flex-col lg:flex-row mt-20">
      <div className="lg:w-1/2">
        <h1 className="text-2xl sm:text-5xl font-bold md:leading-[70px]">The Original URL SHORTENER</h1>
        <p className=" text-gray-400 sm:pe-5 mt-10">
          The complete URL Shortener platform, Link Management, Link Analytics,
          Deep links, QR Codes Generator, and Link in Bio. Shorten, brand,
          manage, track, and share your links effortlessly.
        </p>
      </div>
      <div className="mt-[40px] lg:mt-[-70px]">
        <Image src={bannerImage} alt="banner image"/>
      </div>
    </main>
  );
}

export default Banner;
