import React from 'react';

const RenderPokemon = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div>
            {pokemon ? pokemon.map(p => (
                <PokeCard key = {p.id} p = {p} />
            )): <p>Loading...</p>}
        </div>
    );
};

const PokeCard = ({ p }) => {
    // console.log(p)
    return (
        <div className='pokecard'>
            <p>{p.name}</p>
            <img src={p.imageUrl} alt={p.name} />
        </div>
    )
}

export default RenderPokemon;

