import React, { useState, useEffect } from "react";
// search icon
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./Loading";
import { Searchbar } from "./Searchbar";
import { RecipeCard } from "./RecipeCard";
import RecipeData from "../database/recipes";

export function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchRecipe = async () => {
    try {
      setLoading(true); // Set loading to true before fetching

      setRecipes(RecipeData["recipes"]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSearchedRecipe = async (e) => {
  //   e.preventDefault();
  //   fetchRecipe();
  // };

  useEffect(() => {
    setLoading(true);
    try {
      const allRecipes = RecipeData["recipes"];
      setRecipes(allRecipes);
      setFilteredRecipes(allRecipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

    // Filter recipes based on the search query
    useEffect(() => {
      if (query) {
        const filtered = recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecipes(filtered);
      } else {
        setFilteredRecipes(recipes);
      }
    }, [query, recipes]);

  const discoverMore = () => {
    setLimit((prevState) => prevState + 10);
    fetchRecipe();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-100" onSubmit={(e) => e.preventDefault()}>
          <Searchbar
            placeholder="eg. Vegan, Vegetarian, Dinner"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-600" />}
          />
        </form>
      </div>
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <p className=" containertext-black text-2xl">Latest Posts</p>
      </div>
      {filteredRecipes.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
            {filteredRecipes.slice(0, limit).map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          {filteredRecipes.length > limit && (

          <div className="flex w-full items-center justify-center py-10">
            <button
              className="bg-[#94B49F] text-black px-3 py-1 rounded-full text-sm"
              onClick={discoverMore}
            >
              Discover More
            </button>
          </div>
          )}
        </>
      ) : (
        <div className="text-black w-full items-center justify-center py-10">
          <p className="text-center">
            No tasty results. Let's discover something else!
          </p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
