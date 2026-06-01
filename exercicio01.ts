interface Livro {

    titulo: string,
    autor: string,
    ano: number,
    disponivel: boolean

}

const biblioteca: Livro[] = [
    { titulo: "O menino Maluquinho", autor: " Ziraldo ", ano: 2012, disponivel: true },
    { titulo: "A rainha Estrangulada", autor: " Maurice Druon ", ano: 1988, disponivel: true },
    { titulo: "Divergentes", autor: "Veronica Roth", ano: 2012, disponivel: false },
    { titulo: "O auto da Compadecida", autor: "Ariano Suassuna", ano: 1980, disponivel: false },
    { titulo: "O Ritual", autor: "Mo Hayder", ano: 2008, disponivel: true }
]


const listarTitulosDisponiveis = (livros:Livro[]):string[] =>{

    return livros
        .filter(liv => liv.disponivel === true )
        .map(liv => liv.titulo)

}

listarTitulosDisponiveis(biblioteca)