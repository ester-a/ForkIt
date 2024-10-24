export async function fetchRecipes (filter) {
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&
    app_id=${process.env.REACT_APP_EDAMAM_API_ID}&
    app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&
    from=0&to=${limit}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

    const data = await response.json();

    return data.hits;
}

export async function fetchRecipe(id){
    // const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
    
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

    console.log(url)

    const response = await fetch(url)

    const data = await response.json();

    return data[0];
}



