import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // provider state
  const [idRecipe, saveIdRecipe] = useState(null);
  const [information, saveRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const result = await axios.get(url);

      saveRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{
        information,
        saveIdRecipe,
        saveRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
