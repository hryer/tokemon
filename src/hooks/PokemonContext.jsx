import React from 'react';

const PokemonStateContext = React.createContext();
const PokemonDispatchContext = React.createContext();

const initialState = {
  // eslint-disable-next-line no-undef
  pokemons: JSON.parse(localStorage.getItem('myPokemons')) || [],
};

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD':
      return addPokemon(state, payload);
    case 'REMOVE':
      return removePokemon(state, payload);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const saveToStorage = (poke) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('myPokemons');
  // eslint-disable-next-line no-undef
  localStorage.setItem('myPokemons', JSON.stringify(poke));
};

const addPokemon = (state, pokemonItem) => {
  const { pokemons } = state;

  const newPokemon = {
    id: pokemons.length + 1,
    nickname: pokemonItem.nickname,
    image: pokemonItem.image,
    name: pokemonItem.name,
  };
  saveToStorage([...state.pokemons, newPokemon]);
  return {
    pokemons: [...state.pokemons, newPokemon],
  };
};

const removePokemon = (state, nickname) => {
  saveToStorage(state.pokemons.filter(poke => poke.nickname !== nickname));
  return {
    pokemons: state.pokemons.filter(poke => poke.nickname !== nickname),
  };
};

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
