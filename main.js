const pokemonContainer = document.querySelector('#pokemon__container')

const URL= "https://pokeapi.co/api/v2/pokemon/"

for( let i = 1; i < 51; i++)
{
    fetch(URL+ i)
        .then((response) => response.json())
        .then(data => crearPokemon(data))
}

function crearPokemon(pokemon)
{
    const div = document.createElement("div");
    div.classList.add(".card__container");
    div.innerHTML = `<div class="card__container--id-health">
                        <p class="card__container--id">${pokemon.id}</p>
                        <p class="card__container--id-health">${pokemon.base_stat}</p>
                    </div>
                    <div class="card__container--img">
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    </div>
                    <p class="card__container--name">${pokemon.name}</p>
                    <div class="card__container--weight-height">
                        <p class="card__container-height">${pokemon.height}</p>
                        <p class="card__container-weight">${pokemon.weight}</p>
                    </div>`;

    pokemonContainer.append(div);
}