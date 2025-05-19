function obterPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

const nomes: string[] = ["Café", "Chá", "Suco"];
const primeiroNome = obterPrimeiro(nomes);
console.log(primeiroNome);

const numeros: number[] = [10, 20, 30];
const primeiroNumero = obterPrimeiro(numeros);
console.log(primeiroNumero);

interface Produto {
  nome: string;
  preco: number;
}

const produtos: Produto[] = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 150 },
];

const primeiroProduto = obterPrimeiro(produtos);
console.log(primeiroProduto);