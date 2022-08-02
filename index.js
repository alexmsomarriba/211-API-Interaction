

function FetchPokemonData(pokemon) {
    let data;
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      } return res.json()
    })
    .then(response => data = response.json);

    return data
}

function CheckStats(pokemon1, pokemon2) {
    let pokeData1 = FetchPokemonData(pokemon1)["stats"];
    let pokeData2 = FetchPokemonData(pokemon2)["stats"];

    let statTotal1 = 0;
    pokeData1.forEach(stat => {
        statTotal1 = statTotal1 + stat["base_stat"];
    });

    let statTotal2 = 0;
    pokeData2.forEach(stat => {
        statTotal2 = statTotal2 + stat["base_stat"];
    });

    if(statTotal1 > statTotal2) {
        return pokemon1
    } else if(statTotal2 > statTotal1) {
        return pokemon2
    }
}

function PassInputs(form){
    let inputs = Array.from(form.elements);
    let pokemon1 = inputs[1];
    let pokemon2 = inputs[2];

    CheckStats(pokemon1, pokemon2);
}