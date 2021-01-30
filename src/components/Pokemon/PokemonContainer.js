import React, { useState, useEffect } from 'react';

import { baseGET } from '../../api';
import RenderPokemon from './RenderPokemon';

const PokemonContainer = () => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        baseGET().then(res => {
            // console.log(res, 'as;odfijoeijsodf');
            setPokemon(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <button>click!</button>
            <RenderPokemon pokemon = {pokemon} />
        </div>
    )
};

export default PokemonContainer;