const getPokemonList = () => {
    for (let i = 0; i < 10; i++) {
        let pokemon;
        let id = Math.floor(Math.random() * 900) + 1;
        fetchPokemon(id)
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
                let types = [];
                for (let elem of json.types) {
                    types.push(elem.type.name);
                }
                pokemon = {
                    image: json.sprites.other["official-artwork"].front_default,
                    name: json.forms[0].name,
                    number: id,
                    types: types,
                    link:
                        "https://bulbapedia.bulbagarden.net/wiki/" +
                        json.forms[0].name +
                        "_(Pokémon)",
                };
                createPokemonCard(pokemon);
            });
    }
};

const fetchPokemon = (id) =>
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/");

function createPokemonCard(pokemon) {
    let body = document.body;
    let arr = pokemon.types;
    let articule = document.createElement("article");
    articule.className = "article";
    let imageContainer = document.createElement("div");
    imageContainer.className = "article__header";
    let image = document.createElement("img");
    image.src = pokemon.image;
    image.className = "article__header__img";
    let div = document.createElement("div");
    div.className = "article__footer";
    let name = document.createElement("h2");
    name.innerHTML = pokemon.name;
    let number = document.createElement("h3");
    number.innerHTML = "No." + pokemon.number;
    let divTypes = document.createElement("div");
    divTypes.className = "article__footer__types";
    for (elem of arr) {
        let types = document.createElement("span");
        types.className = "article__footer__types__span";
        types.style.backgroundColor = getTypeColor(elem);
        divTypes.appendChild(types);
        types.innerHTML = elem;
    }

    let link = document.createElement("a");
    link.className = "article__footer__logo";
    link.href = pokemon.link;
    let logo = document.createElement("img");
    logo.src = "assets/image/pokeball.png";

    imageContainer.appendChild(image);
    div.appendChild(name);
    div.appendChild(divTypes);
    link.appendChild(logo);
    articule.appendChild(number);
    articule.appendChild(imageContainer);
    articule.appendChild(div);
    articule.appendChild(link);
    body.children[1].appendChild(articule);
}

function getTypeColor(type) {
    switch (type) {
        case "normal":
            return "#A8A878";
        case "fighting":
            return "#C03028";
        case "flying":
            return "#A890F0";
        case "poison":
            return "#A040A0";
        case "ground":
            return "#E0C068";
        case "rock":
            return "#B8A038";
        case "bug":
            return "#A8B820";
        case "ghost":
            return "#705898";
        case "steel":
            return "#B8B8D0";
        case "fire":
            return "#F08030";
        case "water":
            return "#6890F0";
        case "grass":
            return "#78C850";
        case "electric":
            return "#F8D030";
        case "psychic":
            return "#F85888";
        case "ice":
            return "#98D8D8";
        case "dragon":
            return "#7038F8";
        case "dark":
            return "#705848";
        case "fairy":
            return "#EE99AC";
        default:
            return "#68A090";
    }
}

//createAllPokemonCard(pokemonList);
getPokemonList();
