"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirResultado(r) {
    if (r.tipo === "sucesso") {
        console.log("Dados:", r.dados);
    }
    else {
        console.log("Erro:", r.mensagem);
    }
}
const ok = {
    tipo: "sucesso",
    dados: ["Status: 200", "Conexão Estabelecida"]
};
exibirResultado(ok);
