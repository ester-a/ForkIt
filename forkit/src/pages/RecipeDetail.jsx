import RecipeData from "../database/recipes";
import Loading from "../components/Loading";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

export function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

 
  const getRecipe = async (id) => {
      setLoading(true);
      
      // Fetching recipe by ID from the database
      setRecipe(recipes[id]);
  }

  useEffect(() => {
    getRecipe(id);
  }, [id]);

 

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const getDietLabels = (recipe) => {
    const labels = [];
    if (recipe.gluten_free) labels.push("Gluten Free");
    if (recipe.dairy_free) labels.push("Dairy Free");
    if (recipe.vegan) labels.push("Vegan");
    if (recipe.vegetarian) labels.push("Vegetarian");
    if (recipe.paleo) labels.push("Paleo");
    if (recipe.low_carb) labels.push("Low Carb");
    if (recipe.high_protein) labels.push("High Protein");
    return labels.length > 0 ? labels : [];
  };

  return (
    <div className="w-full">
      {/* Display the recipe header */}
      {/* <Header title={recipe.name} image={recipe.image} /> */}
      {/* Only render Header if recipe is defined */}
      {recipe ? (
        <Header title={recipe.name} image={recipe.image} />
      ) : (
        <div>Loading Recipe...</div> // Display a loading message or skeleton component here
      )}
      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className="text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.calories_per_portion}
            </span>
            <p className="text-black text-[12px] md:text-md">CALORIES</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.total_time}
            </span>
            <p className="text-black text-[12px] md:text-md">TOTAL TIME</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.servings}
            </span>
            <p className="text-black text-[12px] md:text-md">SERVINGS</p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10">
          {/* Left Side */}
          <div className="w-full md:w-2/4 md:border-r border-slate-800 pr-1">
            <div className="flex flex-col gap-5">
              <p className="text-[#b7887f] text-2xl inderline">Ingredients</p>
              {recipe?.ingredients?.map((ingredient, index) => {
                return (
                  <p key={index} className="text-black flex gap-2">
                    <AiFillPushpin className="text-[#94B49F] text-xl" />
                    {ingredient}
                  </p>
                );
              })}
            </div>

            {recipe && (
              <div className="flex flex-col gap-3 mt-20">
                <p className="text-[#b7887f] text-2xl">Diet Labels</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getDietLabels(recipe).map((item, index) => (
                    <p key={index} className="text-black flex space-between">
                      <BsPatchCheck color="#94B49F" className="mr-2" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0">
            {/* Nutritions */}
            <div className="mb-10">
              <p className="text-[#b7887f] text-2xl">Nutritions</p>
              <div className="grid grid-cols-2 gap-4">
                {recipe?.nutrition &&
                  Object.keys(recipe.nutrition).map((key, index) => (
                    <p key={index} className="text-black">
                      <span className="font-semibold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>{" "}
                      {recipe.nutrition[key]}
                    </p>
                  ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mb-10">
              <p className="text-[#b7887f] text-2xl">Instructions</p>
              <ol className="list-decimal list-inside text-black">
                {recipe?.instructions
                  ? recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))
                  : "No instructions available."}
              </ol>
            </div>

            {/* Related Recipes Section */}

            {recipes?.length > 0 && (
              <>
                <p className="text-[#b7887f] text-2xl">Related</p>
                <div className="flex flex-wrap gap-6 px-1 pt-3">
                  {recipes?.map((item, index) => (
                    <RecipeCard recipe={item.recipe} index={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Leave a comment table */}

      <div className="max-w-2xl mx-auto p-6 bg-white border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>
        <p className="text-gray-600 mb-4">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Recipe Rating */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Recipe Rating
          </label>
          <div className="flex space-x-2 text-2xl">
            <button
              type="button"
              aria-label="1 star"
              className="text-gray-400 hover:text-yellow-500"
            >
              ☆
            </button>
            <button
              type="button"
              aria-label="2 stars"
              className="text-gray-400 hover:text-yellow-500"
            >
              ☆
            </button>
            <button
              type="button"
              aria-label="3 stars"
              className="text-gray-400 hover:text-yellow-500"
            >
              ☆
            </button>
            <button
              type="button"
              aria-label="4 stars"
              className="text-gray-400 hover:text-yellow-500"
            >
              ☆
            </button>
            <button
              type="button"
              aria-label="5 stars"
              className="text-gray-400 hover:text-yellow-500"
            >
              ☆
            </button>
          </div>
        </div>

        {/* Comment Box */}
        <div className="mb-4">
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="comment"
          >
            Comment *
          </label>
          <textarea
            id="comment"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
            rows="5"
            placeholder="Write your comment here..."
          ></textarea>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="name"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
            placeholder="Your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
            placeholder="Your email"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
