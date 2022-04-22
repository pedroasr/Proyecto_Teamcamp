import * as React from 'react';
import { useState } from 'react';

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
                    <img src={image} data-src={image} alt={name}></img>
                </div>
                <div>
                    {name}
                </div>
            </a>
        </div>
    );
}

export function MovieList(){
    const [data, setData] = useState([{id: 0, image: '', name: ''}]);

    React.useEffect(() => {
        fetch(`http://localhost:3099/movies`)
        .then(response => {return response.json()})
        .then((data) => {setData(data.results)})
    }, [data])

    return(
        <div> 
            <div>
                <Movie id={data[0].id} image={data[0].image} name={data[0].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[1].id} image={data[1].image} name={data[1].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[2].id} image={data[2].image} name={data[2].name}/>
            </div>
            <div>
                <Movie id={data[3].id} image={data[3].image} name={data[3].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[4].id} image={data[4].image} name={data[4].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[5].id} image={data[5].image} name={data[5].name}/>
            </div>
            <div>
                <Movie id={data[6].id} image={data[6].image} name={data[6].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[7].id} image={data[7].image} name={data[7].name}/>
            </div>
            <div></div>
            <div>
                <Movie id={data[8].id} image={data[8].image} name={data[8].name}/>
            </div>
        </div>
    )
}

export default MovieList;

