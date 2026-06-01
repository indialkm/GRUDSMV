"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obterPrimeiro(objeto) {
    return objeto[0];
}
const listaNomes = obterPrimeiro(["Catarina", "Nero Noru Toto"]);
const listaIdade = obterPrimeiro([1, 5]);
console.log(`Primeiro nome : ${listaNomes}`);
console.log(`Primeira idade : ${listaIdade}`);
