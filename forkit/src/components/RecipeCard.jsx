import React, { useState } from "react";
import { Link } from "react-router-dom";

export function RecipeCard({ recipe }) {
  const { image, label, cuisineType, dietLabel, mealType, uri } = recipe;

  const id = uri?.split("#")[1];

  return (
    <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
      <div className='bg-_gradient w-full rounded-lg'>
        <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full' />

        <div className='p-3'>
            <p className='text-black font-semibold'>{label}</p>
            <div className='mt-2'>
                <span className='px-2 py-1 text-[12px] capitalize bg-[#94B49F] shadow-xl rounded-full mr-3 text-black'>
                    {cuisineType}
                </span>
                <span className='px-2 py-1 text-[12px] capitalize bg-[#b7887f] shadow-xl rounded-full text-black'>
                    {mealType}
                </span>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
