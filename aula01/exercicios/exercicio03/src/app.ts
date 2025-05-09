
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


const input = process.argv[2];

if (!input) {
    console.log("⚠️ Por favor, informe o nome ou ID de um Pokémon.");
    process.exit(1);
}


async function getPokemonData(pokemon: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            
            if (response.status === 404) {
                console.log("❌ Pokémon não encontrado!");
            } else {
                console.log(`⚠️ Erro ao buscar dados: ${response.statusText}`);
            }
            return;
        }

        const data = await response.json();

       
        const name = capitalize(data.name);
        const height = data.height / 10;
        const weight = data.weight / 10; 
        const types = data.types.map((t: any) => capitalize(t.type.name)).join(", ");

       
        console.log(`${name} – ${height} m – ${weight} kg – ${types}`);
    } catch (error) {
       
        console.log("⚠️ Erro de rede. Tente novamente.");
    }
}


getPokemonData(input);