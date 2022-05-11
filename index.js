const pesquisaPoke = document.getElementById("submit")
const nomePokemon = document.getElementById("pk-name")
const pokeDiv = document.getElementById("poke-info")
let pokemon = {}

pesquisaPoke.addEventListener("click" , function(e){
  e.preventDefault();
  chamaPokemon(nomePokemon.value.toLowerCase())
})

function chamaPokemon(poke){
$.ajax({
  url: `https://pokeapi.co/api/v2/pokemon/${poke}`,
  success: function (results) {
    pokemon = results
    return mostraPokemon()
    
  },
  error: function(erro){
    console.log(erro)
  },
})
}

function mostraPokemon(){
  pokeDiv.style.display="inline"
  pokeDiv.innerHTML = `<h1> ${pokemon.name.toUpperCase()} - ${pokemon.id}</h1>
    <figure>
      <img class="img-poke" src="${pokemon.sprites.other.home.front_default}">
    </figure>
    <h3>Dados do Pokemon</h3><br>
    <span class="poke-data"> 
    <strong>Peso:</strong> ${pokemon.weight/10} Kg<br>
    <strong>Altura:</strong> ${pokemon.height/10} m <br>
    <strong>Ability:</strong> ${pokemon.abilities[0].ability.name}<br>
    <strong>Ability:</strong> ${pokemon.abilities[1].ability.name}<br>
    </span>`

}