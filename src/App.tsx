import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mocks-pokemon';
import { idText } from 'typescript';

const App: FunctionComponent = () => {


    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div >
            <h1 className="center">Pokedex</h1>
            <div className="container" >
                <div className="row">
                    {pokemons.map(({id, name, picture, created}) =>(
                    <div className='col-6 col-sm-4' key={id}>
                        <div className='card horizontal'>
                            <div className='card-img'>
                                <img src={picture} alt={name} />
                            </div>
                            <div className='card-stacked'>
                                <div className='card-body'>
                                    <p>{name} n</p>
                                    <p> <small>{created.toString()} </small> </p>:
                                </div>

                            </div>

                        </div>



                    </div>
                    ))}

                </div>

            </div>


        </div>

    )
}

export default App;