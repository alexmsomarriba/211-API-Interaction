let arrayOfPosts = [];

function fetchPokemonData(pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      } return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
  }

