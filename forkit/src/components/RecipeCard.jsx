import React, { useState } from "react";
import { Link } from "react-router-dom";

export function RecipeCard({ recipe }) {
  // Return null if recipe is undefined
  if (!recipe) return null;
  const { image, name, cuisine, category, id, servings, calories_per_portion } = recipe;

  return (
    <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
      <div className='w-48 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer'
      style={{ 
        flex: "1 1 200px", 
        margin: "20px", 
        height: "350px", 
        boxSizing: "border-box"
      }}>
        <img src={image} alt={name} className='w-full h-32 object-cover' />

        <div className="p-4">
        <p className="text-gray-500 text-sm">{servings} servings</p>
        <p className="text-gray-500 text-sm">{calories_per_portion} calories</p>
      </div>
    

        <div className='p-3'>
            <p className='text-black font-semibold'>{name}</p>
            <div className='mt-2'>
                <span className='px-2 py-1 text-[12px] capitalize bg-[#94B49F] shadow-xl rounded-full mr-3 text-black'>
                    {cuisine}
                </span>
                <span className='px-2 py-1 text-[12px] capitalize bg-[#b7887f] shadow-xl rounded-full text-black'>
                    {category}
                </span>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
