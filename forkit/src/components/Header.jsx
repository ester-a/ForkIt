import React from "react";
import { banner1, banner2, banner3, banner4, banner5 } from "../images";
const images = [banner1, banner2, banner3, banner4, banner5];

export function Header({ title, image, type }) {
  const randomBgImage = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="relative w-full h-full">
          <img
            src={image ?? randomBgImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-[#FFFBF5] to-transparent top-0 z-8 flex flex-col item-center justify-center pt-40 2xl:pt-20">
        <h1 className="text-black text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <div className="w-full mt-4">
          <p className="text-xl text-center text-black bg-[#F9F2ED] py-4">
            Discover a world of delicious and nutritious recipes tailored just
            for you!
            <br className="hidden md:block" />
            Whether you're looking to eat healthier, explore new flavors, or
            simply find quick meal ideas, we have got you covered. Our curated
            collection of wholesome recipes is designed to inspire your culinary
            journey, making healthy eating enjoyable and accessible.
          </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
