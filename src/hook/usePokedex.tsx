import React, { useState } from "react";
import type { Pokemon } from "../types/Pokemon";

export default function pokedex(){
const [pokemon, setPokemon] = useState<Pokemon | null>(null);
const [nome, setNome] = useState("");
const [erro, setErro] = useState("");
const [carregando, setCarregando] = useState(false);

  const buscarPokemon = async () => {
    if (!nome.trim()) return;

    setCarregando(true);
    setErro("");
    setPokemon(null);

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
      );
      if (!resposta.ok) throw new Error("Pokémon não encontrado");

      // Convertemos o JSON dizendo ao TS que ele tem formato Pokemon 
      const dados: Pokemon = await resposta.json();
      setPokemon(dados);
    } catch (e) {
      setErro("Pokémon não encontrado 😢");
    } finally {
      setCarregando(false);
    }
  };

  return{carregando, erro, pokemon, setNome, buscarPokemon}

}