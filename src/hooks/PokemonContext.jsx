import React from 'react';

const PokemonStateContext = React.createContext();
const PokemonDispatchContext = React.createContext();

const initialState = {
  pokemons: [],
};

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return addPokemon(state, payload.pokemonItem);
    case "REMOVE":
      return removePokemon(state, payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
}};

const addPokemon = (state, pokemonItem) => {
  const listPokemon = [...state.pokemons];
  const newPokemon = {
    pokemonId: listPokemon.length + 1,
    nickname: pokemonItem.nickname,
    image: pokemonItem.image,
    name: pokemonItem.name
  };
  return {
    pokemons: [...state.list, newPokemon]
  };
}

const removePokemon = (state, id) => {
  return { pokemons: state.pokemons.filter(poke => poke.id !== id) };
}

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  );
};

const usePokemonState = () => {
  const context = React.useContext(PokemonStateContext);
  if (context === undefined) {
    throw new Error('usePokemonState must be used within a PokemonProvider');
  }
  return context;
};

const usePokemonDispatch = () => {
  const context = React.useContext(PokemonDispatchContext);
  if (context === undefined) {
    throw new Error('usePokemonDispatch must be used within a PokemonProvider');
  }
  return context;
};

export { PokemonProvider, usePokemonState, usePokemonDispatch };
