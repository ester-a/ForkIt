// utils.js

// Fetch all recipes with optional filtering by query or limit
export const fetchRecipes = async ({ query = "", limit = 10 }) => {
    try {
      const response = await fetch(`localhost:3000/recipes`);
      const data = await response.json();
  
      // If there's a query, filter recipes
      const filteredData = query
        ? data.filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
          )
        : data;
  
      return filteredData.slice(0, limit); // Return with limit applied
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };
  
  // Fetch a single recipe by ID
  export const fetchRecipe = async (id) => {
    try {
      const response = await fetch(`localhost:3000/recipes/${id}`);
      if (!response.ok) throw new Error("Recipe not found");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching the recipe:", error);
      return null;
    }
  };
  
// export async function fetchRecipes (filter) {
//     const {query, limit} = filter;

//     const url = `https://api.edamam.com/search?q=${query}&
//     app_id=${process.env.REACT_APP_EDAMAM_API_ID}&
//     app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&
//     from=0&to=${limit}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error('Failed to fetch recipes');
//       }

//     const data = await response.json();

//     return data.hits;
// }

// export async function fetchRecipe(id){
    
//     const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

//     console.log(url)

//     const response = await fetch(url)

//     const data = await response.json();

//     return data[0];
// }



