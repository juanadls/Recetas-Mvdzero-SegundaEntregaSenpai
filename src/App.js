import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from "../src/components/Recipe";
import NabvarRecetas from './components/navbar';
import FooterRecetas from './components/footer';
import ZwasteInfoSection from './components/Zwaste-info-section';


function App() {

const APP_ID = "3c0b0cac";
const APP_KEY = "1740dd117fe23d41d8d372cf4b3d3c33";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("lentils");

useEffect(()=>{
  getRecipes();
 }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);

  }
 
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">

      <NabvarRecetas/>

      <form  onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Buscar</button>
      </form>

      <div className='recipes'>

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
       </div>
       <ZwasteInfoSection/>
     <FooterRecetas/>
    </div>
  );
}

export default App;
