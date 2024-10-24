import React, { useState, useEffect } from "react";
// search icon
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./Loading";
import { Searchbar } from "./Searchbar";
import { RecipeCard } from "./RecipeCard";
import { fetchRecipes } from "../utils";

export function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchRecipe = async () => {
    try {
        setLoading(true); // Set loading to true before fetching

      const data = await fetchRecipes({ query, limit });

      setRecipes(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault()
    fetchRecipe()
  }

  const discoverMore = () => {
    setLimit(prevState => prevState + 10)
    fetchRecipe()
  }

  useEffect(() => {
    setLoading(true);

    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
        <form className='w-full lg:w-100'
        onSubmit={handleSearchedRecipe}>
        {/* <form className='w-full lg:w-2/4'> */}
          <Searchbar
            placeholder="eg. Vegan, Vegetarian, Dinner"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className='text-gray-600' />}
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item.recipe} key={index} />
            ))}
          </div>

          <div className='flex w-full items-center justify-center py-10'>
            <button className='bg-[#94B49F] text-black px-3 py-1 rounded-full text-sm' onClick={discoverMore}>
                Discover More</button>
          </div>
        </>
      ) : (
        <div className='text-black w-full items-center justify-center py-10'>
          <p className='text-center'>
            No tasty results. Let's discover something else!
          </p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
