/*var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup',()=>{
    quantidade.value
    pegaPokemon(quantidade)
})
pegaPokemon(2)*/
var quantidade = document.getElementById('quantidade')
quantidade.addEventListener("keyup",()=>{
    pegaPokemons(quantidade.value)
})
pegaPokemons(2)

function pegaPokemons(quantidade){
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(aLLpokemon => {
        let pokemons_info = []
        let pokemonBoxes = document.querySelector(' .pokemon-boxes')

        aLLpokemon.results.map((val)=>{
            //requisita o nome: pokemons_info.push({nome:val.name})
            // requisita a imagem: pokemonSingle.sprites.front_default

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    pokemons_info.push({nome:val.name,imagem:pokemonSingle.sprites.front_default})
                    pokemonBoxes.innerHTML =""
                    if(pokemons_info.length == quantidade){
                        pokemons_info.map((val)=>{
                            
                            pokemonBoxes.innerHTML += `
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`">
                                <p>`+val.nome+`</p>
                            </div>
                        
                        `
                    })                       
                }    
            })
        })
    })
}
