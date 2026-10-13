import { useEffect, useState } from "react";
import type {Pokemon} from "./../model/Pokemon";

export function TestLesson9() {

    //初手はnullが入って、API取得をしたら、Pokemon型のデータを格納する。
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(()=> {
        async function getPokemon() {
            try {
                const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon/pikachu"
            );

            if (!res.ok) {
                throw new Error("ポケモンの取得に失敗しました。");
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
            {pokemon && (
                <>
                <h2>{pokemon.name}</h2>
                <p>図鑑番号：{pokemon.id}</p>
                <p>高さ：{pokemon.height}</p>
                <p>重さ：{pokemon.weight}</p>

                <img src={pokemon.sprites.front_default ?? ""} alt={pokemon.name} />
                </>
                
            )}
         </>
    );
}