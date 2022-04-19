import * as React from 'react';

import './styles.css';

type GenderProps = {
    gender: string;
};
export function Gender({ gender }: GenderProps) {
    const path = `"/filter?gender=${gender}"`;
    return (
        <a className={'Gender'} href={path}>
            {gender}
        </a>
    );
}

export default Gender;