import * as React from 'react';

import MovieList from './movieList';
import GenderList from './genderList';

import './styles.css';

function App(){
    return(
        <div className='App'>
            <h1 className={'Title'}>lavideotecadelvago</h1>
                <div className={'Body'}>
                    <table className='main-content-table'>
                        <tr>
                            <td id='gender-list'>
                                <GenderList/>
                            </td>
{/*                             <td id='movie-list'>
                                <MovieList list={[{id: 1, image: 'dddd', name:'dc'}]}/>
                            </td> */}
                        </tr>
                    </table>
                </div>
        </div>
    );
}

export default App;