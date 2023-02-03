import React,{FunctionComponent, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mocks-pokemon';
  
const App: FunctionComponent = () => {
 
 const [pokemons]=useState<Pokemon[]>(POKEMONS);
    
 return (
     <div>
         <h1>Pokedex</h1>
         <p>
             Il y a {pokemons.length} pokemons dans la Pokedex
         </p>


     </div>

 )
}
  
export default App;