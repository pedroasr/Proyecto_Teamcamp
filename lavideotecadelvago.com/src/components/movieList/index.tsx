import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

type MovieProps = {
    id: number
    image: string;
    name: string;
};

export function Movie(props: MovieProps) {
    const path = `movie?id=${props.id}`;
    return (
        <div>
            <Link className='Movie' to={path}>
                <div>
                    <img src={props.image} data-src={props.image} alt={props.name}></img>
                </div>
                <div>
                    {props.name}
                </div>
            </Link>
        </div>
    );
}

export function MovieList(){
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([{id:0, image:'', name:''}]);


    React.useEffect(() => {
        fetch(`http://localhost:3099/movies`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results)})
    }, []);

    if (isLoading){
        return (
        <div className="App">
            <h1>Cargando...</h1>
        </div>  
        );
    }
    return(
        <div> 
            <div>
                <Movie id={movieData[0].id} image={movieData[0].image} name={movieData[0].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[1].id} image={movieData[1].image} name={movieData[1].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[2].id} image={movieData[2].image} name={movieData[2].name}/>
            </div>
            <div>
                <Movie id={movieData[3].id} image={movieData[3].image} name={movieData[3].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[4].id} image={movieData[4].image} name={movieData[4].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[5].id} image={movieData[5].image} name={movieData[5].name}/>
            </div>
            <div>
                <Movie id={movieData[6].id} image={movieData[6].image} name={movieData[6].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[7].id} image={movieData[7].image} name={movieData[7].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={movieData[8].id} image={movieData[8].image} name={movieData[8].name}/>
            </div>
        </div>
    )
}

export default MovieList;

