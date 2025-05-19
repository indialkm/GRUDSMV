interface PropsBotao {
  titulo: string;
  ativo?: boolean;
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

console.log(renderizarBotao({ titulo: "Salvar" }));
console.log(renderizarBotao({ titulo: "Cancelar", ativo: false }));
console.log(renderizarBotao({ titulo: "Enviar", ativo: true }));