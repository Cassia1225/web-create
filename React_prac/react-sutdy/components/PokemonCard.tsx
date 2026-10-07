import type {Pokemon} from "./../model/Pokemon";

type PokemonCardProps = {
        pokemon:Pokemon;
    };

export function PokemonCard({pokemon}: PokemonCardProps) {

    

    return(
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