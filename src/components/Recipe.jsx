import React from "react";
import { RecipeImage, RecipesDiv } from "../styled-components/Recipe-styled";


const Recipe = ({title, image, ingredients}) => {
    return (
    
        <RecipesDiv>
            <h1 >{title}</h1>
            <ul>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>

                ))}
            </ul>

            <RecipeImage src={image} alt="No description"></RecipeImage>
        </RecipesDiv>
    ); 

}
export default Recipe;