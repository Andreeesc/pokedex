import React from 'react';
import Card from '../../../../components/Card';
import { PokemonResultInterface } from '../../../../models/Pokemon/pokemon.interface';

import './index.css'

const PanelList = ({list}: {list:PokemonResultInterface[]}) => {
    const componentClassName = "c-panel";

    return (
        <section className={componentClassName}>
            {
                list.map((pokemon, index) => <Card name={pokemon.name} id={index + 1} url={pokemon.url} key={index}/>)
            }
        </section>
    )
}

export default PanelList;