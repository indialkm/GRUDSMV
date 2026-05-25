import { unique, groupBy, sumBy } from './ArrayUtils.js';

interface Roupa {
  nome: string;  
   preco: number;
 tipo: string;
}

const arr: number[] = [1,1,2,3,4,5,6,4,26,26,45,789];
const arr2: number[] = [12,12,12,34,34,45,45,67,90,23,67];

console.log("Atividade 01 - TS");

console.log("Unique\n");

console.log(`Array original com repetição:\n1º => ${arr}\n2º =>${arr2}\n`);

console.log(`Utilizando o metodo Unique e tranformando o array em um set:\n1° => ${unique(arr)}\n2° => ${unique(arr2)}\n`);

console.log("groupBy()\n");

const roupas: Roupa[] = [
  { nome: "Vestido Rosa",          tipo: "A",   preco: 180.23},
  { nome: "Vestido de Noite",      tipo: "A",   preco: 500.30},
  { nome: "Camiseta Azul",         tipo: "B",   preco: 45.12},
  { nome: "Camiseta Vermelha",     tipo: "B",   preco:35.50},
  { nome: "Calça jeans",           tipo: "C",   preco: 70.50},
  { nome: "Calça Moletom",         tipo: "C",   preco: 80.56}
];

const estoqueAgrupado = groupBy(roupas, "tipo");

console.log(estoqueAgrupado);

console.log("sumBy()\n");

console.log(`Total: ${sumBy(roupas, "preco")} \n`);