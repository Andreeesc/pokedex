import React, {useEffect, useState} from 'react';
import './index.css';
import PanelList from './components/PanelList';
import { getPokemonListAPI } from '../../services/api';
import { PokemonResultInterface } from '../../models/Pokemon/pokemon.interface';
import Pagination from './components/Pagination/index';


const Home = () => {
    const componentClass = 'c-home';
    const [pokemonList, setPokemonList] = useState<PokemonResultInterface[]>([]);

    useEffect(() => {
        getPokemonListAPI({page:0}).then(data => (setPokemonList(data.results)))
    }, [])

    return (
        <div className={componentClass}>
            <h1>Lista de Pokemons</h1>
            <PanelList list={pokemonList} />
            <Pagination page={0} />
        </div>
    )
}

export default Home;