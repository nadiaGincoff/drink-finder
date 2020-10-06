import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipeContext } from '../context/RecipeContext';

const Form = () => {
    const [ search, saveSearch ] = useState({
        name: '',
        category: ''
    })

    const { categories } = useContext(CategoryContext);
    const { searchRecipe, saveConsult } = useContext(RecipeContext);
  
    // function to read content
    const getRecipeData = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    
    return ( 
        <form 
            className='col-12'
            onSubmit={ e => {
                e.preventDefault();
                searchRecipe(search);
                saveConsult(true);
            }}
        >
            
            <fieldset className='text-center mt-4'>
                <legend>Search drink for category or ingredient</legend>
            </fieldset>
            <div className='row'>
                <div className='col-md-4'>
                    <input 
                        name='name'
                        className='form-control'
                        type='text'
                        placeholder='Search for ingredient'
                        onChange={getRecipeData}
                    />
                </div>
                <div className='col-md-4'>
                    <select 
                        className='form-control'
                        name='category'
                        onChange={getRecipeData}
                    >
                        <option value=''> --Select category-- </option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Search recipe'         
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Form;
