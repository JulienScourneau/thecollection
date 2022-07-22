class Pokemon {
    constructor(img, name, number, types, description) {
        this._img = img
        this._name = name
        this._number = number
        this._types = types
        this._description = description
    }

    get image() {
        return this.img;
    }

    set image(val) {
        this.img = val;
    }

    get name() {
        return this.name;
    }
    set name(val) {
        this.name = val;
    }

    get number() {
        return this.number;
    }

    set number(val) {
        this.number = val;
    }

    get types() {
        return this._types;
    }

    set types(val) {
        this.types = val;
    }

    get description() {
        return this.description;
    }

    set description(val) {
        this.description = val;
    }
}

let pokemonList = []

pokemonList.push(new Pokemon('assets/image/Lumivole-RS.png', "Lumivole", "No.314", types = ["insecte"], "Son doux parfum attire les Muciole. Cela lui permet de guider ces derniers afin de dessiner des symboles lumineux dans le ciel nocturne."))
pokemonList.push(new Pokemon('img', "Pijako", "No.441", types = ["normal", "vol"], "Ce Pokémon bat la mesure en balançant les plumes de sa queue de droite à gauche comme un métronome. Il imite le langage humain."))
pokemonList.push(new Pokemon('img', "Hyporoi", "No.230", types = ["eau", "dragon"], "Hyporoi vit au fin fond des profondeurs océaniques généralement inhabitées. On a longtemps cru que le bâillement de ce Pokémon créait les tourbillons dans les océans."))
pokemonList.push(new Pokemon('img', "Coconfort", "No.014", types = ["insecte", "poison"], "Il peut à peine bouger. Quand il est menacé, il sort parfois son aiguillon pour empoisonner ses ennemis."))
pokemonList.push(new Pokemon('img', "Cacnea", "No.331", types = ["plante"], "Cacnea vit dans les milieux arides, tels les déserts. Sa fleur libère un parfum entêtant pour attirer sa proie. Lorsqu'elle s'approche, ce Pokémon envoie des épines pour la neutraliser."))
pokemonList.push(new Pokemon('img', "Otaquin", "No.728", types = ["eau"], "Ce Pokémon fabrique des ballons remplis d'eau pour se battre. Il ne peut produire un gros ballon qu'au prix d'un entraînement rigoureux."))
pokemonList.push(new Pokemon('img', "Nidoran", "No.029", types = ["poison"], "Un Pokémon paisible qui n'aime pas se battre. Sa petite corne est empoisonnée."))
pokemonList.push(new Pokemon('img', "Vipélierre", "No.495", types = ["plante"], "La lumière du soleil augmente fortement son agilité. Ses lianes sont plus habiles que ses mains."))
pokemonList.push(new Pokemon('img', "Dimoclès", "No.680", types = ["acier", "spectre"], "Ses deux lames abattent leurs proies en enchaînant les attaques et les parades à un rythme effréné."))
pokemonList.push(new Pokemon('img', "Spiritomb", "No.442", types = ["spectre", "ténèbres"], "Ce Pokémon est né de la fusion de 108 âmes, mais on raconte que certaines d'entre elles seraient de nature maléfique."))

function createPokemonCard(pokemon) {
    let body = document.body
    let arr = pokemon.types
    let articule = document.createElement("article")
    let image = document.createElement("img")
    console.log(pokemon._img);
    image.src = pokemon._img

    let div = document.createElement("div")
    div.className = "article__footer"
    let name = document.createElement("h2")
    name.innerHTML = pokemon._name
    let number = document.createElement("h3")
    number.innerHTML = pokemon._number
    let divTypes = document.createElement("div")
    divTypes.className = "article__footer__types"
    for (elem of arr) {
        let types = document.createElement("span")
        divTypes.appendChild(types)
        types.innerHTML = elem
    }
    let description = document.createElement("p")
    description.innerHTML = pokemon._description

    div.appendChild(name)
    div.appendChild(number)
    div.appendChild(divTypes)
    div.appendChild(description)
    articule.appendChild(image)
    articule.appendChild(div)
    body.children[1].appendChild(articule)
}

createPokemonCard(pokemonList[0])