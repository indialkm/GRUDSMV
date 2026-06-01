"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosBanco = [];
function exibirPerfil(u) {
    console.log(`Id: ${u.id},\nNome: ${u.nome},\nEmail: ${u.email}`);
}
function atualizarUsuario(id, dados) {
    const user = usuariosBanco.find(u => u.id === id);
    if (!user) {
        console.log("Usuário não encontrado.");
        return;
    }
    const ind = usuariosBanco.indexOf(user);
    const usuarioAntigo = user;
    const usuarioAtualizado = { ...usuarioAntigo, ...dados };
    usuariosBanco[ind] = usuarioAtualizado;
    console.log("Usuário atualizado com sucesso!");
}
const User = {
    id: 1,
    nome: "Catarina",
    email: "catarina@email.com",
    senha: "mundoBita"
};
usuariosBanco.push(User);
const UsuarioFront = usuariosBanco[0];
exibirPerfil(UsuarioFront);
const UsuarioMudarEmail = {
    email: "catarinaNovo@email.com"
};
atualizarUsuario(1, UsuarioMudarEmail);
const UsuarioEmailNovo = usuariosBanco[0];
exibirPerfil(UsuarioEmailNovo);
