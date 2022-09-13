// import React, { useState } from 'react';

// const Pokemon = (props) => {
//   const [pokemons, setPokemons] = useState([]);

//   const handleGetPokemons = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//       .then(response => response.json())
//       .then(response => setPokemons(response.results))
//   };

//   return (
//     <div className="App">
//       <div className="title">
//         <button className="button-19" onClick={handleGetPokemons}>Fetch Pokemon</button>
//       </div>
//       <div className="result">
//         {pokemons && pokemons.map((pokemon, i) => {
//           return (
//             <ul key={i}>
//               <li>{pokemon.name}</li>
//             </ul>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// export default Pokemon;


// USING AXIOS
import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const handleGetPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => {
        setPokemons(response.data.results);
      })
  }

  return (
    <div className="App">
      <div className="title">
        <button className="button-19" onClick={handleGetPokemons}>Fetch Pokemon</button>
      </div>
      <div className="result">
        {pokemons && pokemons.map((pokemon, i) => {
          return (
            <ul key={i}>
              <li>{pokemon.name}</li>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default Pokemon;
