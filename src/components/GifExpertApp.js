import React, { useState } from "react";
import AddCategory from "./AddCategory";
import CategoriesCollection from "./CategoriesCollection";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]);
  //   // setCategories regresa un callback del estado anterior
  //   // y después de la flecha son los nuevos valores del estado.
  //   setCategories((categs) => [...categories, "HunterXHunter"]);
  // };
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <CategoriesCollection key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
