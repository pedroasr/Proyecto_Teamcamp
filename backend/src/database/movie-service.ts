import { listenerCount } from 'process';
import { SQL_DB } from './maria-db';

export type Movie = {

};

export type MovieServices = {
    list(page: number, pageSize: number, search: string),
    getById(id: string),
    getByFilter(filter: string | string[])
    getByOrder(order: 'alphadescent' | 'alphaascent' | 'new' | 'old')
};

export function buildMovieService(db: SQL_DB,
                                  movieService : MovieServices){
    return{
        async list(page: number, pageSize: number, search: string){

        }
    }




} 