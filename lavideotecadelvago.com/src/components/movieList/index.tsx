import * as React from 'react';

import './styles.css';

type MovieProps = {
    id: number
    image: string;
    name: string;
};
export function Movie({ id, image, name }: MovieProps) {
    const path = `"http://localhost/movies/movie?id=${id}"`;
    return (
        <a className='Movie' href={path}>
            <div>
                <img src={image} data-src={image} alt={name}></img>
            </div>
            <div>
                {name}
            </div>
        </a>
    );
}
