import React from 'react';
import './index.css';

import Cards from './components/cards';

const Home = () => {

    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <Cards />
        </div>
    )
}

export default Home;