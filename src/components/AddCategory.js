import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  // función para cambiar el estado del valor ingresado
  // dentro del input (o sea, el evento)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    // para prevenir el comportamiendo por defecto del formulario
    // y evitar que se refresque la página cada vez que se da enter.
    e.preventDefault();
    // si borrando los espacios, el texto es mayor a 2, se agrega
    if (inputValue.trim().length > 2) {
      setCategories((oldCategories) => [inputValue, ...oldCategories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
