function buscaPokemon() {
    let pokemon = document.getElementById("campo").value
    let url = ` https://pokeapi.co/api/v2/pokemon/${pokemon}`

    let ResultadoURL = fetch(url)

    .then(ResultadoURL => ResultadoURL.json())
    .then(dadosURL =>{
        tipo = dadosURL.types[0].type.name
        document.body.style.backgroundColor = coresTipos[tipo];
        document.querySelector(".tipo").style.backgroundColor = coresTipos[tipo];
        document.getElementById("Nome").textContent = dadosURL.name.toUpperCase();
        document.getElementById("Tipo").textContent = dadosURL.types[0].type.name.toUpperCase();
        document.getElementById("Peso").textContent = `${dadosURL.weight / 10} kg`;
        document.getElementById("Altura").textContent = `${dadosURL.height / 10} m`;
        document.getElementById("Habilidade1").textContent = dadosURL.abilities[0].ability.name.toUpperCase();
        document.getElementById("Habilidade2").textContent = dadosURL.abilities[1].ability.name.toUpperCase();
        imagensAutomatico(dadosURL.sprites);
    })
    visualizar()


}

function visualizar(){
    document.getElementById("pokemon").style.visibility = "visible";
    document.getElementById("img").style.visibility = "visible";
}

let intervalorImagens = null;

function imagensAutomatico(sprites) {
    if (intervalorImagens !== null) {
        clearInterval(intervalorImagens);
    }

    const imagens = [sprites.front_default, sprites.back_default].filter(Boolean);
    let index = 0;
    if (imagens.length === 0) return; 
    document.getElementById("img").src = imagens[index];
    if (imagens.length === 1) return; 

    intervalorImagens = setInterval(() => {
        index = (index + 1) % imagens.length;
        document.getElementById("img").src = imagens[index];
    }, 1000);
}

const coresTipos = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#363636',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};