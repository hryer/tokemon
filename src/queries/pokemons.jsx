import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query Pokemonlist( $limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset){
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
