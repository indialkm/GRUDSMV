import { unique, groupBy, sumBy } from './utils/arrayUtils';

const arr: number[] = [1, 2, 1, 2, 5, 5, 5, 33, 33];

console.log("Os números de forma não repetida no conjunto são: ", unique(arr));

interface Carrinho {
    name : string;
    preco : number;
    categoria: string;
}

const carrinhoItens: Carrinho[] = [
    {
      name: "Vestido de noite",
      preco: 15.00,
      categoria: "Vestido",
    },
  
    {
      name: "Vestido florido",
      preco: 400.00,
      categoria: "Vestido",
    },
  
    {
      name: "Calça jeans",
      preco: 150.00,
      categoria: "Calca",
    },
  
    {
      name: "Calça social",
      preco: 350.00,
      categoria: "Calca",
    },
  ];

console.log(groupBy(carrinhoItens, 'categoria'));

const totalCarrinho = sumBy(carrinhoItens, "preco");

console.log("Total do carrinho: R$", totalCarrinho.toFixed(2)); 