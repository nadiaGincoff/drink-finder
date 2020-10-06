import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import ProviderCategory from './context/CategoryContext';
import ProviderRecipe from './context/RecipeContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <ProviderCategory>
      <ProviderRecipe>
        <ModalProvider>
          <Header />
          <div className='container mt-5'>
              <div className='row'>
                <Form />
              </div>
              <RecipeList /> 
          </div>
        </ModalProvider>
      </ProviderRecipe>
    </ProviderCategory>
  );
}

export default App;
