//Process objeto fornece informações sobre o processo Node.js atual e permite o controle sobre ele. Isso é quando a gente roda um código node tipo node pokede.ts é criado um processo na memória para o rodar o Node.js. Nós podemos pegar infomações desse processo, o process.argv é uma propriedade que guarda informações do terminal elç retorna um array com esses dados.

//Informações que serão pegas do terminal para mandar para a API
const nome: string = process.argv.slice(2);
const id: number = process.argv.slice(3);

interface Pokemon{
    nome : string;
    tamanho: number;
    peso: number;
    tipo: string;
};

async function pegarDados(pesquisa: number | string): Promise<void>{
    
let url = `https://pokeapi.co/api/v2/pokemon/${pesquisa}`

try {
const response = await fetch(url);

if(!response.ok){
    throw new Error("Pokemon não encontrado");
}

const dados = await response.json();
const pokemon : Pokemon = {
    nome : dados.name,
    tamanho : dados.height,
    peso : dados.weight,
   tipo: dados.types.map((item: any) => item.type.name).join(", ")
};

console.log(`${pokemon.nome} - ${pokemon.tamanho} - ${pokemon.peso} - ${pokemon.tipo}`);

}catch(erro){
    console.error("Erro no fetch", erro);
}
   
}

pegarDados(nome);
