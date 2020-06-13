import React, {useEffect, useState} from 'react';
import './index.css';
import PanelList from './components/PanelList';
import { getPokemonListAPI } from '../../services/api';
import { PokemonResultInterface } from '../../models/Pokemon/pokemon.interface';
import Pagination from './components/Pagination/index';


const Home = () => {
    const [pokemonList, setPokemonList] = useState<PokemonResultInterface[]>([]);

    useEffect(() => {
        getPokemonListAPI({page:0}).then(data => (setPokemonList(data.results)))
    }, [])

    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <PanelList list={pokemonList} />
            <Pagination />
        </div>
    )
}

export default Home;