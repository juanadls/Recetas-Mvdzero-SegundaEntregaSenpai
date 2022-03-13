import React from "react";
import { RecipeImage, RecipesDiv} from "../styled-components/Recipe-styled";


const Recipe = ({title, image, ingredients}) => {
    return (
    
        <RecipesDiv>
            <h1 >{title}</h1>

            <RecipeImage src={image} alt="Recipe food"></RecipeImage>
            <ul>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>

                ))}
            </ul>  
        </RecipesDiv>
    ); 

}
export default Recipe;