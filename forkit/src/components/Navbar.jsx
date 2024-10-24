import React, { useState } from "react";
import Logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Button from './Button'

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);

  return (
    <header className="w-full fixed z-10 bg-[#f4e0d5]">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-black text-lg cursor-pointer"
        >
          <img className="w-16 md:w-20 lg:w-30" src={Logo} alt="Logo" />
          Fork<span>It</span>
        </a>

        <ul className="hidden md:flex text-black gap-6 ">
            <li>
                <a href="/">Home</a>
            </li>

               {/* Recipes Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setRecipesDropdownOpen(true)}
            onMouseLeave={() => setRecipesDropdownOpen(false)}
          >
            <a href="/recipes" className="flex items-center">
              Recipes <AiOutlineDown className="ml-1" />
            </a>

            {/* Dropdown Menu */}
            {recipesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-[200px] bg-white text-black shadow-md rounded-md">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="/recipes/diet">By Diet</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="/recipes/course">By Course</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="/recipes/protein">By Protein</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="/recipes/method">By Method</a>
                </li>
              </ul>
            )}
          </li>
            <li>
                <a href="/Saved">Saved</a> 
            </li>
            <li>
                <a href="/MealPlan">Meal Plan</a> 
            </li>
            <li>
                <a href="/Groceries">Groceries</a> 
            </li>
        </ul>

        {/* Desktop Button */}
        <Button 
        title='Sign in'
        containerStyle= 'hidden md:block bg-transparent border border-black text-black hover:bg-black hover:text-slate-300 rounded-full min-w-[130px]'
        />

        {/* Mobile Menu Button */}
            <button className='block md:hidden text-black text-xl'
            onClick={() => setOpen(prev => !prev)}>
                {open ? <AiOutlineClose/> :
                <HiMenuAlt3 /> }
            </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${open ? "flex" : "hidden"}
        bg-[#f4e0d5] flex-col w-full px-4 pt-16 pb-10 text-black gap-6 text-[14px]`}>
            <a href="/">Home</a>
            
        {/* Mobile Recipes Dropdown */}
        <div className="flex flex-col">
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => setRecipesDropdownOpen(!recipesDropdownOpen)}
          >
            <span>Recipes</span>
            <AiOutlineDown />
          </div>

          {recipesDropdownOpen && (
            <div className="flex flex-col pl-4">
              <a href="/recipes/diet" className="py-2">By Diet</a>
              <a href="/recipes/course" className="py-2">By Course</a>
              <a href="/recipes/protein" className="py-2">By Protein</a>
              <a href="/recipes/method" className="py-2">By Method</a>
            </div>
          )}
        </div>
        
            <a href="/favorites">Saved</a> 
            <a href="/favorites">Meal Plan</a>
            <a href="/favorites">Groceries</a> 
      </div>
    </header>
  );
}

export default Navbar;
