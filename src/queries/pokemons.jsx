import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query Pokemonlist($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        url
        name
        image
        id
      }
      status
      message
    }
  }
`;

export const GET_POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      moves {
        move {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      sprites {
        back_default
        back_shiny
        front_default
        front_shiny
      }
      species {
        name
      }
    }
  }
`;
