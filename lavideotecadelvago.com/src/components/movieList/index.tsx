import * as React from 'react';

import './style.css';

type MovieProps = {
    id: number
    image: string;
    name: string;
};

export function Movie({ id, image, name }: MovieProps) {
    const path = `"http://localhost/movies/movie?id=${id}"`;
    return (
        <div>
            <a className='Movie' href={path}>
                <div>
                    <img src={image} list-src={image} alt={name}></img>
                </div>
                <div>
                    {name}
                </div>
            </a>
        </div>
    );
}

type MovieListProps = {
    list : MovieProps[];
};

export function MovieList({list}: MovieListProps){
/*     fetch(`"http://localhost/movies?page=${page}"`)
    .then(response => response.json())
    .then(list =>  */ 
    return(
        <div>
            <div>
                <Movie id={list[0].id} image={list[0].image} name={list[0].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[1].id} image={list[1].image} name={list[1].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[2].id} image={list[2].image} name={list[2].name}/>
            </div>
            <div>
                <Movie id={list[3].id} image={list[3].image} name={list[3].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[4].id} image={list[4].image} name={list[4].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[5].id} image={list[5].image} name={list[5].name}/>
            </div>
            <div>
                <Movie id={list[6].id} image={list[6].image} name={list[6].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[7].id} image={list[7].image} name={list[7].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={list[8].id} image={list[8].image} name={list[8].name}/>
            </div>
        </div>
    )
}

export default MovieList;