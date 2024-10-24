import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from '../components/Loading';
import Header from '../components/Header'; 
import RecipeCard from "../components/RecipeCard";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiFillPushpin } from "react-icons/ai"
import { BsPatchCheck }  from "react-icons/bs"


export function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

        const recommend = await fetchRecipes({ query: data?.label, limit: 5 });
        setRecipes(recommend);
    
    } catch (error) {
      console.error("Error fetching the recipe:", error);
 
      setLoading(false);
} finally {
    setLoading(false);
  }
    
  };

  useEffect(() => {
    getRecipe(id)
  }, [id])

  if (loading) {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
    <Loading />
    </div>
    );
  }

  return (
  <div className='w-full'>
        {/* Display the recipe header */}
    <Header 
            title={recipe?.label} 
            image={recipe?.image}
          />
          <div className='w-full px-4 lg:px-20 pt-5'>
            <div className='flex gap-10 items-center justify-center px-4'>
                <div className='flex flex-col justify-between'>
                    <span className='text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
                      {recipe?.calories?.toFixed(2)}  
                    </span>
                    <p className='text-black text-[12px] md:text-md'>CALORIES</p>
                </div>

                <div className='flex flex-col justify-center'>
                    <span className='text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
                      {recipe?.totalTime}  
                    </span>
                    <p className='text-black text-[12px] md:text-md'>TOTAL TIME</p>
                </div>

                <div className='flex flex-col justify-center'>
                    <span className='text-black text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
                      {recipe?.yield}  
                    </span>
                    <p className='text-black text-[12px] md:text-md'>SERVINGS</p>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10'>
                {/* Left Side */}
                <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
                <div className='flex flex-col gap-5'>
                    <p className='text-[#b7887f] text-2xl inderline'>Ingredients</p>
                    { recipe?.ingredientLines?.map((ingredient, index) => {
                        return (
                            <p key={index} className="text-black flex gap-2" >
                                <AiFillPushpin className='text-[#94B49F] text-xl'/>{ingredient}</p>
                        )

                    })}
                </div>

                <div className='flex flex-col gap-3 mt-20'>
                    <p className='text-[#b7887f] text-2xl'>Health Labels</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        { recipe?.healthLabels.map
                            ((item, index) => (
                          <p key={index} className='text-black flex space-between'>
                            <BsPatchCheck color='#94B49F' className="mr-2"/> {item}
                          </p>
                        ))}
                    </div>
                </div>
           </div>

           {/* Right Side */}
           <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
                {
                    recipes?.length > 0 && (
                        <>
                        <p className='text-white text-2xl'>Popular Posts</p>
                        <div className="flex flex-wrap gap-6 px-1 pt-3">
                            { recipes?.map((item, index) => (
                                <RecipeCard recipe={item.recipe} index={index} /> 
                            ))}
                        </div>
                        </>
                    )
                }
           </div>
            </div>

          </div>

          </div>
                
  )
}

export default RecipeDetail;


