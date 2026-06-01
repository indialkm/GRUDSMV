type CategoriaContato = "amigo" | "trabalho" | "familia" | "outro";

interface Contato {
    id: number;
    nome: string;
    telefone: string;
    email?: string;
    categoria: CategoriaContato;
    favorito: boolean;
}

const contatos: Contato[] = [];
const contatosFavoritos: Contato[] = [];

function gerarNumeroUnico(): number {
    let numero: number = Math.floor(Math.random() * 10000);
    contatos.forEach((c) => {
        do {
            numero = Math.floor(Math.random() * 10000);
        } while (c.id === numero);
    })
    return numero;
}

function validarCategoria(valor: string): valor is CategoriaContato {
    return ["amigo", "trabalho", "familia", "outro"].indexOf(valor) !== -1;
}

function extrairCampo<T, K extends keyof T>(lista: T[], campo: K): T[K][] {
    return lista.map(item => item[campo]);
}

function toggleFavorito(id: number): void {
    const contato = contatos.find(c => c.id === id);

    if (!contato) return;

    contato.favorito = !contato.favorito;

    const jaEstaFavorito = contatosFavoritos.find(c => c.id === id);
    if (contato.favorito && !jaEstaFavorito) {
        contatosFavoritos.push(contato);
    } else if (!contato.favorito && jaEstaFavorito) {
        const index = contatosFavoritos.indexOf(jaEstaFavorito);
        contatosFavoritos.splice(index, 1);
    }

    const li = document.querySelector(`[data-id="${id}"]`) as HTMLElement;
    if (!li) return;

    const btn = li.querySelector(".estrela") as HTMLButtonElement;
    if (!btn) return;

    if (contato.favorito) {
        btn.classList.add("favoritado");
        btn.title = "Remover dos favoritos";
    } else {
        btn.classList.remove("favoritado");
        btn.title = "Adicionar aos favoritos";
    }

    logConsole();
}

function exibirContatos(): void {
    const ul = document.getElementById("lista") as HTMLUListElement;
    ul.innerHTML = "";

    if (contatos.length === 0) {
        ul.innerHTML = '<li style="color:#aaa; text-align:center; border:none;">Nenhum contato ainda.</li>';
        return;
    }

    contatos.forEach(contato => {
        const li = document.createElement("li");
        li.setAttribute("data-id", String(contato.id));

        li.innerHTML = `
            <div class="info">
                <strong>${contato.nome}</strong>
                <span class="categoria">${contato.categoria}</span>
                ${contato.telefone ? `<span style="font-size:0.8rem; color:#555">📞 ${contato.telefone}</span>` : ""}
                ${contato.email ? `<span style="font-size:0.8rem; color:#555">✉️ ${contato.email}</span>` : ""}
            </div>
            <div style="display:flex; gap:0.5rem; align-items:center;">
                <button class="estrela ${contato.favorito ? "favoritado" : ""}" title="${contato.favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}" onclick="toggleFavorito(${contato.id})"></button>
                <button onclick="removerContato(${contato.id})" title="Remover contato" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:#e55;">✕</button>
            </div>
        `;

        ul.appendChild(li);
    });
}

function logConsole(): void {
    console.clear();
    console.log("Contatos");
    console.table(contatos);

    console.log("Favoritos");
    console.table(contatosFavoritos);

    const nomes = extrairCampo(contatos, "nome");
    const telefones = extrairCampo(contatos, "telefone");
    console.log("Todos os nomes:", nomes);
    console.log("Todos os telefones:", telefones);
}

function removerContato(id: number): void {
    const index = contatos.findIndex(c => c.id === id);
    if (index === -1) return;

    contatos.splice(index, 1);

    const indexFav = contatosFavoritos.findIndex(c => c.id === id);
    if (indexFav !== -1) contatosFavoritos.splice(indexFav, 1);

    exibirContatos();
    logConsole();
}

const formulario = document.getElementById("meuFormulario") as HTMLFormElement;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const inputNome = document.getElementById("nome") as HTMLInputElement;
    const inputTelefone = document.getElementById("telefone") as HTMLInputElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const selectCategoria = document.getElementById("categoria") as HTMLSelectElement;

    const nome = inputNome.value.trim();
    const telefone = inputTelefone.value.trim();
    const email = inputEmail.value.trim();
    const categoria = selectCategoria.value;

    if (!nome) {
        alert("O nome é obrigatório!");
        return;
    }
    if (!telefone) {
        alert("O telefone é obrigatório!");
        return;
    }
    if (!validarCategoria(categoria)) {
        alert(`Categoria inválida: "${categoria}". Use: amigo, trabalho, familia ou outro.`);
        return;
    }

    const novoContato: Contato = {
        id: gerarNumeroUnico(),
        nome: nome,
        telefone: telefone,
        email: email || undefined,
        categoria: categoria,
        favorito: false,
    };

    contatos.push(novoContato);

    exibirContatos();
    logConsole();
    formulario.reset();
});

(window as any).toggleFavorito = toggleFavorito;
(window as any).removerContato = removerContato;

export {};