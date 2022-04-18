import { SQL_DB } from './maria-db';

export type Movie = {
    id: number,
    name: string,
    image: string,
    description: string
};

export type MovieServices = {
    list(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default') : Promise<Movie[]>,
    getById(id: string),
    getByFilter(page: number, pageSize: number, search: string, filter: string | string[], order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default')
};

export function buildMovieService(db: SQL_DB){
    return{
        async list(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default') : Promise<Movie[]>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES()`
            );
        },
    
        async getById(id: string) : Promise<Movie>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES()`
            );
        },

        async getByFilter(page: number, pageSize: number, search: string, filter: string | string[], order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default') : Promise<Movie[]>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES()`
            );
        }
    }
} 