import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import Button from "./Button";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


export function Footer() {
  return (
    <footer className="text-black py-20 bg-[#f4e0d5]">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-white">
        <div className="flex">
          <p className="font-bold text-center">
            Fork<span className="text-green-800 text-xl">It</span>
          </p>
        </div>
        <div className="">
          <p>QUICK LINKS</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            <a
              href="#"
              className="block
                md:inline-block py-2
                 hover:text-gray-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block
                md:inline-block py-2
                 hover:text-gray-500"
            >
              About
            </a>
            <a
              href="#"
              className="block
                md:inline-block py-2
                 hover:text-gray-500"
            >
              Contact
            </a>

      
          </div>
        </div>

        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="bg-black-600 p-1.5 rounded-sm text-black hover:text-gray-400 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-black-600 p-1.5 rounded-sm text-black hover:text-gray-400 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="bg-black-600 p-1.5 rounded-sm text-black hover:text-gray-400 hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="bg-black-600 p-1.5 rounded-sm text-black hover:text-gray-400 hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          <Button
            title="Sign up"
            btnType="button"
            containerStyle="mt-10 md:block bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-md min-w-[130px]"
          />
        </div>
      </div>

      {/* Bottom Menu - Meal Plan, Groceries, Favorites, Settings */}
      {/* <div className="flex items-center justify-center py-10 ">
        <div className="flex gap-8 text-black text-sm md:text-md">
          <a href="#" className="flex items-center gap-2 hover:text-gray-500">
            <GiForkKnifeSpoon />
            Meal Plan
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-500">
            <CiShoppingBasket />
            Groceries
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-500">
            <FaRegHeart />
            Favorites
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-500">
            <IoSettingsOutline />
            Settings
          </a>
        </div>
      </div> */}

<div className="flex items-center justify-center py-10 ">
        <div className="flex gap-8 text-black text-sm md:text-md flex-wrap md:flex-nowrap justify-around w-full">
          <div className="flex flex-col items-center text-center">
            <GiForkKnifeSpoon className="text-3xl md:text-xl mb-1 md:mb-0" />
            <span className="text-sm md:text-md">Meal Plan</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <CiShoppingBasket className="text-3xl md:text-xl mb-1 md:mb-0" />
            <span className="text-sm md:text-md">Groceries</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaRegHeart className="text-3xl md:text-xl mb-1 md:mb-0" />
            <span className="text-sm md:text-md">Favorites</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IoSettingsOutline className="text-3xl md:text-xl mb-1 md:mb-0" />
            <span className="text-sm md:text-md">Settings</span>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center py-10">
        <span className="text-gray-800 leading-10">CodeArtist &copy; 2024</span>
      </div>
    </footer>
  );
}

export default Footer;
