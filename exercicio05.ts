interface PropsBotao{
    titulo:string
    ativo?:boolean
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

console.log(renderizarBotao({ titulo: "Login", ativo: false }));
console.log(renderizarBotao({ titulo: "Calcular Preço", ativo: true }));
console.log(renderizarBotao({ titulo: "Cadastrar equipamento"}));