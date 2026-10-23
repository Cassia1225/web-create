import {useState} from 'react';
import type {SubmitEvent} from 'react';
import type {Pokemon} from './PokemonCard';

export function PokemonSearchForm() {
    const [query, setQuery] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    async function handleSubmit(e:SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${query}`
            );
            if(!response.ok) {
                throw new Error("ポケモンが見つかりません！");
            }

            const data = await response.json();
            setPokemon(data);
        }
        catch(error) {
            console.log(error);
        }
        
    };
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>ポケモン図鑑</h1>
                <input 
                type="text" 
                placeholder='ポケモン名を入力' 
                value={query} 
                onChange={(e) => {
                    setQuery(e.target.value);
                }}/>
                <button type='submit'>検索</button>
            </form>
            <div>
                <h2>検索結果</h2>
                {pokemon && (<h3>図鑑番号：{pokemon.id}</h3>)}
                {pokemon && (<h3>名前：{pokemon.name}</h3>)}
                {pokemon?.sprites.front_default && (
                    <img src={pokemon.sprites.front_default} alt={`${pokemon.name}の画像`} />
                )}

            </div>
        </>
        
    );
}