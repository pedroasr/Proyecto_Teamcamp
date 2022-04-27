import * as React from 'react';

import MovieList from './movieList';
import GenderList from './genderList';
import { BrowserRouter} from 'react-router-dom';
//import { Switch } from "react-router";

import './styles.css';

function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <h1 className={'Title'}>lavideotecadelvago</h1>
                    <div className={'Body'}>
                        <table className='main-content-table'>
                         ¡
                            <tr>
                                <td id='gender-list'>
                                    <GenderList/>
                                </td>
                                <td id='movie-list'>
                                    <MovieList />
                                </td>
                            </tr>
                         
                        </table>
                    </div>
            </div>
        </BrowserRouter>
    );
}

export default App;