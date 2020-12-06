import React from 'react';

const PokemonStateContext = React.createContext()
const PokemonDispatchContext = React.createContext()

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {pokemons: [...state.pokemons, action.value]}
    }
    case 'remove': {
      return {pokemons: state.pokemons.filter((poke) => poke.id !== action.id)}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const PokemonProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(pokemonReducer, [pokemons: []])
  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  )
}

const usePokemonState = () => {
  const context = React.useContext(PokemonStateContext)
  if (context === undefined) {
    throw new Error('usePokemonState must be used within a PokemonProvider')
  }
  return context
}

const usePokemonDispatch = () => {
  const context = React.useContext(PokemonDispatchContext)
  if (context === undefined) {
    throw new Error('usePokemonDispatch must be used within a PokemonProvider')
  }
  return context
}

export {PokemonProvider, usePokemonState, usePokemonDispatch}
