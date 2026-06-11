import "./Pokedex.css";
import PokeCard from "../PokeCard/PokeCard"
import usePokedex from "../../hook/usePokedex"

// Definindo o tipo com base no json para simplificar a implementação

/*
Pokedex recebe o usePokedex que guarda a lógica do hook e retorna os itens necessário para rodar a pokedex e os métodos necessários.
- carregando -> pega a lógica de carregando
- erro -> exibe o erro
- pokemon - é o tipo do pokemon que esta sendo lido e tem um tipo a parte
- setNome -> método de config de nome
- buscarPokemon -> método que consome o endpoint da API

*/

export default function Pokedex() {
  const { carregando, erro, pokemon, setNome, buscarPokemon } = usePokedex();


  return (
    <div className="pokedex-container">
      <h2 className="pokedex-title">🔎 Pokédex</h2>

      <input
        className="pokedex-input"
        type="text"
        placeholder="Digite o nome do Pokémon"
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="pokedex-button" onClick={buscarPokemon}>
        Buscar
      </button>
      {carregando && <p className="pokedex-loading">Carregando...</p>}
      {erro && <p className="pokedex-error">{erro}</p>}
      
      <PokeCard pokemon= {pokemon}   />

    </div>
  );
}