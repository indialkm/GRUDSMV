"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biblioteca = [
    { titulo: "O menino Maluquinho", autor: " Ziraldo ", ano: 2012, disponivel: true },
    { titulo: "A rainha Estrangulada", autor: " Maurice Druon ", ano: 1988, disponivel: true },
    { titulo: "Divergentes", autor: "Veronica Roth", ano: 2012, disponivel: false },
    { titulo: "O auto da Compadecida", autor: "Ariano Suassuna", ano: 1980, disponivel: false },
    { titulo: "O Ritual", autor: "Mo Hayder", ano: 2008, disponivel: true }
];
const listarTitulosDisponiveis = (livros) => {
    return livros
        .filter(liv => liv.disponivel === true)
        .map(liv => liv.titulo);
};
listarTitulosDisponiveis(biblioteca);
