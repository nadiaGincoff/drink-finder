import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// create context

export const CategoryContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProviderCategory = (props) => {
    // create context'state
    const [ categories, saveCategories ] = useState([])

    // run the API call
    useEffect(() => {
        const getCategory = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categories = await axios.get(url)
            saveCategories(categories.data.drinks)
        }
        getCategory()
    }, [])

    return (
        <CategoryContext.Provider 
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default ProviderCategory;