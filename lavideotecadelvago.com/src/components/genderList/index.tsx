import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

type GenderProps = {
    gender: string;
};
export function Gender({ gender }: GenderProps) {
    const path = `filter?gender=${gender}`;
    return (
        <Link className={'Gender'} to={path}>
            {gender}
        </Link>
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