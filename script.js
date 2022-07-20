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

let pokemonList = [
]

pokemonList.push(new Pokemon('img', "Lumivole", "314", types = ["insecte"], "Son doux parfum attire les Muciole. Cela lui permet de guider ces derniers afin de dessiner des symboles lumineux dans le ciel nocturne."))
pokemonList.push(new Pokemon('img', "Pijako", "441", types = ["normal", "vol"], "Ce Pokémon bat la mesure en balançant les plumes de sa queue de droite à gauche comme un métronome. Il imite le langage humain."))
pokemonList.push(new Pokemon('img', "Hyporoi", "230", types = ["eau", "dragon"], "Hyporoi vit au fin fond des profondeurs océaniques généralement inhabitées. On a longtemps cru que le bâillement de ce Pokémon créait les tourbillons dans les océans."))
pokemonList.push(new Pokemon('img', "Coconfort", "014", types = ["insecte", "poison"], "Il peut à peine bouger. Quand il est menacé, il sort parfois son aiguillon pour empoisonner ses ennemis."))
pokemonList.push(new Pokemon('img', "Cacnea", "331", types = ["plante"], "Cacnea vit dans les milieux arides, tels les déserts. Sa fleur libère un parfum entêtant pour attirer sa proie. Lorsqu'elle s'approche, ce Pokémon envoie des épines pour la neutraliser."))
pokemonList.push(new Pokemon('img', "Otaquin", "728", types = ["eau"], "Ce Pokémon fabrique des ballons remplis d'eau pour se battre. Il ne peut produire un gros ballon qu'au prix d'un entraînement rigoureux."))
pokemonList.push(new Pokemon('img', "Nidoran", "029", types = ["poison"], "Un Pokémon paisible qui n'aime pas se battre. Sa petite corne est empoisonnée."))
pokemonList.push(new Pokemon('img', "Vipélierre", "495", types = ["plante"], "La lumière du soleil augmente fortement son agilité. Ses lianes sont plus habiles que ses mains."))
pokemonList.push(new Pokemon('img', "Dimoclès", "680", types = ["acier", "spectre"], "Ses deux lames abattent leurs proies en enchaînant les attaques et les parades à un rythme effréné."))
pokemonList.push(new Pokemon('img', "Spiritomb", "442", types = ["spectre", "ténèbres"], "Ce Pokémon est né de la fusion de 108 âmes, mais on raconte que certaines d'entre elles seraient de nature maléfique."))

function createPokemonCard(pokemon) {
    let body = document.body
    let arr = pokemon.types
    let articule = document.createElement("article")
    let image = document.createElement("img")
    let div = document.createElement("div")
    let name = document.createElement("h2")
    let number = document.createElement("h3")
    let divTab = document.createElement("div")
    for (elem of arr) {
        let types = document.createElement("span")
        divTab.appendChild(types)
    }
    let description = document.createElement("p")
    div.appendChild(name, number, divTab, description)
    articule.appendChild(image)
    articule.appendChild(div)
    body.children[1].appendChild(articule)
}

createPokemonCard(pokemonList[0])