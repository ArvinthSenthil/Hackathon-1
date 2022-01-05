const list = 50;

async function fetchPokemons() {
    for (let i = 1; i <= list; i++) {
        await getPokemon(i)
    }
}
async function getPokemon(datas) {
    try {

        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${datas}`);// Will fetch data from API
        let pokemon = await data.json();
        pokemondetails(pokemon);
    } catch (error) {
        alert("error")
    }
}
fetchPokemons();



// To display pokemon details
function pokemondetails(pokemon) {
    let pokemonElement = document.createElement('div');
    pokemonElement.setAttribute("class", "pokemon");
    let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);//To capitalize first letter of name
    let pokeInnerHTML = `

    <div class= "img-container">
    <img src = 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
    alt="pokemon image"/> 
    </div>
<div class= "data">
    <div  class = "info"
    <h4 class = "number">${pokemon.id}. ${name}</h4>
    </div>
    <div class = "ability">
    <p class= "title"> Ability: ${pokemon.abilities[0].ability.name}</p>
    </div>
    <div class= "moves">
    <p class="title"> Moves: ${pokemon.moves[0].move.name}</p>
    </div>
    <div class= "weight">
    <p class="title"> Weight: ${pokemon.weight}</p>
    </div>
 </div>   
    `; // getting id, name, abilities, moves and weight of each pokemon from the given

    pokemonElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonElement)//Adding pokemon details to container

}
document.body.append(poke_container)//Adding container to body in document

// Function to search Pokemon using number
function search() {
    document.getElementById("poke_container").innerHTML = ""

    let val = document.getElementById("input").value
    if (val == "" || null) {
        alert("input box empty")
    }
    else {
        viewinfo(val)
    }
}





// Fetching data from API to get individual pokemon details
async function viewinfo(val) {

    try {
        let a = await fetch("https://pokeapi.co/api/v2/pokemon/" + val)
        let pokemon = await a.json()
        console.log(pokemon);

        let pokemonElement = document.createElement('div');

        pokemonElement.setAttribute("class", "pokemon");

        let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

        let pokeInnerHTML =
            `<div class= "img-container">
        <img src = 
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
        alt="pokemon image"/> 
        </div>
    <div class= "data">
        <div  class = "info"
        <h4 class = "number">${pokemon.id}. ${name}</h4>
        </div>
        <div class = "ability">
        <p class= "title"> Ability: ${pokemon.abilities[0].ability.name}</p>
        </div>
        <div class= "moves">
        <p class="title"> Moves: ${pokemon.moves[0].move.name}</p>
        </div>
        <div class= "weight">
        <p class="title"> Weight: ${pokemon.weight}</p>
        </div>
     </div> `
        pokemonElement.innerHTML = pokeInnerHTML;
        new_container.append(pokemonElement)
        document.body.append(new_container)

    } catch (error) {
        console.error();
    }
}