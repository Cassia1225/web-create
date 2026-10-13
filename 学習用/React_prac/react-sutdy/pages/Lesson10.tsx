import { useEffect, useState } from "react";
import type {Pokemon} from "./../model/Pokemon";
import {PokemonCard} from "./../pages/PokemonCard";

export function Lesson10() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        async function getPokemon() {

            try {
                const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon/pikachu"
                );

                if (!res.ok) {
                    throw new Error("通信失敗");
                }

                const data:Pokemon = await res.json();
                setPokemon(data);

            } catch(e) {
                console.error(e);
            }
            
        }
        getPokemon();
    },[])

    return (
        <>
        <h1>Lesson10</h1>
            {
                pokemon && (<PokemonCard pokemon={pokemon} />)
            }
        </>
        
    );

   
}