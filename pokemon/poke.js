async function listarPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=5'
    const res = await fetch(url)

    if (res.ok) {
        return await res.json()
    }
}

async function obterDetalhePoke(data) {
    const url = data.results[0].url
    const res = await fetch(url)

    if (res.ok) {
        return await res.json()
    }
}

const pokeFun = (async () => {
    const pokeLista = await listarPokemon();
    const detalhePoke = await obterDetalhePoke(pokeLista)
    console.log(detalhePoke)
})

pokeFun()