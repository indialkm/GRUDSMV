type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
    if (r.tipo === "sucesso") {
        console.log("Dados:", r.dados);
    } else {
        console.log("Erro:", r.mensagem);
    }
}

const ok: Resultado = {
    tipo: "sucesso",
    dados: ["Status: 200", "Conexão Estabelecida"] 
};

exibirResultado(ok);