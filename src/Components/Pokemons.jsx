import React , { useState } from 'react';
import axios from 'axios';
import './Pokemons.css'

const Pokemons = () => {
    const [pokemons,setPokemons]=useState([]);

    const handleClick = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            console.log(response.data.results);
            setPokemons(response.data.results);
        }).catch(err =>{
            console.log(err);
        })
    }

    return (
        <div className='content'>
            <button onClick={handleClick}>Fetch Pokemons</button>
            <ul className="pokemons">
                {pokemons.map((item,index)=>{
                    return (<li key={index}> {item.name} </li>)
                })
                }
            </ul>
        </div>
    );
}
export default Pokemons;