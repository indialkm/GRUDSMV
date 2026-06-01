"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderizarBotao({ titulo, ativo = true }) {
    return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}
console.log(renderizarBotao({ titulo: "Login", ativo: false }));
console.log(renderizarBotao({ titulo: "Calcular Preço", ativo: true }));
console.log(renderizarBotao({ titulo: "Cadastrar equipamento" }));
