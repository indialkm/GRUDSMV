type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
  if (r.tipo === "sucesso") {
    r.dados.forEach((dado) => console.log(dado));
  } else if (r.tipo === "erro") {
    console.log(r.mensagem);
  }
}
