import React, { useState, useEffect } from "react";
import usePokedex from "../../hook/usePokedex.tsx"
import type {Pokemon} from "../../types/Pokemon.tsx"


/*
    PokeCard recebe o Pokemon e usa o type Pokemon para dizer para o ts que tipo ele é


*/

export default function PokeCard({ pokemon }: { pokemon: Pokemon | null }) {

    return (

        <div>
            {pokemon && (
                <div className="pokedex-card">
                    <h3 className="pokedex-name">{pokemon.name}</h3>
                    {pokemon.sprites.front_default && (
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="pokedex-image"
                        />
                    )}
                    <p>
                        <strong>Altura:</strong> {pokemon.height * 10} cm
                    </p>
                    <p>
                        <strong>Peso:</strong> {pokemon.weight / 10} kg
                    </p>
                    <p>
                        <strong>Tipos:</strong>{" "}
                        {pokemon.types.map((t) => t.type.name).join(" / ")}
                    </p>
                </div>
            )}

        </div>


    )



}