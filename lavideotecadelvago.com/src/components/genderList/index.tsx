import * as React from 'react';

import './style.css';

type GenderProps = {
    gender: string;
};
export function Gender({ gender }: GenderProps) {
    const path = `"http://localhost/movies/filter?gender=${gender}"`;
    return (
        <a className={'Gender'} href={path}>
            {gender}
        </a>
    );
}

export function GenderList(){
    return (
        <div>
            <div className='gender-list-header'>Géneros</div>
            <ul>
                <li>
                    <Gender gender='Drama'/>
                </li>
                <li>
                    <Gender gender='Comedia'/>
                </li>
                <li>
                    <Gender gender='Thriller'/>
                </li>
            </ul>
        </div>
    );
}

export default GenderList;