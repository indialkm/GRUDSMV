interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    disponivel: boolean;
  }

  const biblioteca: Livro[] = [
    {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano: 1954,
      disponivel: true
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      ano: 1949,
      disponivel: false
    },
    {
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      ano: 1899,
      disponivel: true
    }
  ];
  

  function listarTitulosDisponiveis(livros: Livro[]): string[] {
    return livros
      .filter((livro) => livro.disponivel)
      .map((livro) => livro.titulo);
  }
  

  const titulosDisponiveis = listarTitulosDisponiveis(biblioteca);
  console.log(titulosDisponiveis);