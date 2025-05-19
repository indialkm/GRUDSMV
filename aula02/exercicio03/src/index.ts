interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha): void {
  console.log(`ID: ${u.id}`);
  console.log(`Nome: ${u.nome}`);
  console.log(`Email: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
  console.log(`Atualizando usuário ${id} com os dados:`);
  console.log(dados);
}

const userSemSenha: UsuarioSemSenha = {
  id: 1,
  nome: "Ingrid",
  email: "ingrid@email.com",
};

const dadosAtualizacao: UsuarioAtualizacao = {
  nome: "Ingrid Silva",
  email: "ingrid.silva@email.com",
};

exibirPerfil(userSemSenha);
atualizarUsuario(1, dadosAtualizacao);
