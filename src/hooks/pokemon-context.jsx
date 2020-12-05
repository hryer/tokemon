import React, { useReducer, useCallback } from 'react';
import { createContext, useState } from 'react';

const MyPokemon = createContext();
const MyPokemonDispatch = createContext();

const PokemonProvider = ({ children }) => {
  /*
    PokemonList :
    Name
    Img
    Pokemon

  */
  const [pokemons, setPokemons] = useState([]);

  const gatchaPokemon = useCallback(() => {
    const chance = Math.random() * 100;

    if(chance > 50){
      // getRandom
    }
  },[]);
  
  //   const pokemonsReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'add': {

  //       return {count: state.count + 1}
  //     }
  //     case 'remove': {

  //       return {count: state.count - 1}
  //     }
  //     default: {
  //       throw new Error(`Unhandled action type: ${action.type}`)
  //     }
  //   }
  // }

  const addPokemon = (catchedPokemon) => {
    setPokemons(prevPokemon => [...prevPokemon, catchedPokemon] );
  };

  const removePokemon = (id) => {
    const tmp = pokemons.filter((poke) => poke.id !== id);
    setPokemons(tmp);
  }

  const catchPokemon = () => {}

  return (
    <MyPokemonDispatch.Provider value={{addPokemon, removePokemon, catchPokemon}}>
      <MyPokemon.Provider value={pokemons}>
        {children}
      </MyPokemon.Provider>
    </MyPokemonDispatch.Provider>
  );
};

export { PokemonProvider, MyPokemon, MyPokemonDispatch };
