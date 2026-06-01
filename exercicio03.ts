interface Usuario {

    id: number,
    nome: string,
    email: string,
    senha: string
}

const usuariosBanco: Usuario[] = [];

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha): void {

    console.log(`Id: ${u.id},\nNome: ${u.nome},\nEmail: ${u.email}`)

}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {

    const user = usuariosBanco.find(u => u.id === id)

    if (!user) {
        console.log("Usuário não encontrado.")
        return
    }

    const ind = usuariosBanco.indexOf(user)

   
    const usuarioAntigo = user

    const usuarioAtualizado = { ...usuarioAntigo, ...dados } as Usuario;


    usuariosBanco[ind] = usuarioAtualizado;

    console.log("Usuário atualizado com sucesso!");


}

const User: Usuario = {
    id: 1,
    nome: "Catarina",
    email: "catarina@email.com",
    senha: "mundoBita"
}

usuariosBanco.push(User)


const UsuarioFront : UsuarioSemSenha = usuariosBanco[0] as UsuarioSemSenha;
exibirPerfil(UsuarioFront);

const UsuarioMudarEmail: UsuarioAtualizacao =  {
    email : "catarinaNovo@email.com"
}
atualizarUsuario(1, UsuarioMudarEmail)

const UsuarioEmailNovo : UsuarioSemSenha = usuariosBanco[0] as UsuarioSemSenha;

exibirPerfil(UsuarioEmailNovo);
