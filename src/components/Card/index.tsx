import React from 'react';
import './index.css'

const Card = ({name, id, url}: {name: string, id:number, url:string}) => {
    const componentClassName = 'c-card';

    return (
        <div className={componentClassName}>
            <img src={url} alt={name} title={name}/>
            <h3>{name}</h3>
            <span>ID: #{id}</span>
        </div>
    )
}

export default Card;