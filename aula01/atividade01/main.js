import { unique, groupBy, sumBy } from './arrayUtils.js';
const arr = [1,1,2,3,4,5,6,4,26,26,45,789]
const arr2 = [12,12,12,34,34,45,45,67,90,23,67]

console.log("Atividade 01 - JS")

console.log("Unique\n")

console.log(`Array original com repetição:\n1º => ${arr}\n2º =>${arr2}\n`);

console.log(`Utilizando o metodo Unique e tranformando o array em um set:\n1° => ${unique(arr)}\n2° => ${unique(arr2)}\n`)

console.log("groupBy()\n")

const roupas = [
  { nome: "Vestido Rosa",          tipo: "A",   valor: 180.23},
  { nome: "Vestido de Noite",      tipo: "A",   valor: 500.30},
  { nome: "Camiseta Azul",         tipo: "B",   valor: 45.12},
  { nome: "Camiseta Vermelha",     tipo: "B",   valor:35.50},
  { nome: "Calça jeans",           tipo: "C",   valor: 70.50},
  { nome: "Calça Moletom",         tipo: "C",   valor: 80.56}
];

const estoqueAgrupado = groupBy(roupas, "tipo");

console.log(estoqueAgrupado);

console.log("sumBy()\n")

console.log(`Total: ${sumBy(roupas, "valor")} \n`)