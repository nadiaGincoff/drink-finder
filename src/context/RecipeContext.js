import React, { createContext, useState, useEffect } from 'react';
 import axios from 'axios';

export const RecipeContext = createContext();

const ProviderRecipe = (props) => {
    const [ recipes, saveRecipes ] = useState([])
    const [ search, searchRecipe ] = useState({
        name: '',
        category: '', 
    })
    const [ consult, saveConsult ] = useState(false);
    const { name, category } = search;
  
    useEffect(() => {
        if(consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const result = await axios.get(url)
                saveRecipes(result.data.drinks)
                // console.log(result.data.drinks)
            }
            getRecipes()
        }
    }, [name, category, consult]);

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                searchRecipe,
                saveConsult
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}

export default ProviderRecipe