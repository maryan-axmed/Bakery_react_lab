import { useState } from "react";
import CakeContainer from "./CakeContainer";

const Cake = ({cake}) => {

  const addIngredients = cake.ingredients.map(function(item, index){
    return <li key={index}>{item}</li> ;
  });


  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p>Ingredients List:</p>
          <ul>
            {addIngredients}
          </ul>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>
    </>
  )
};

export default Cake;