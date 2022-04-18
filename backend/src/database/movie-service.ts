import { SQL_DB } from './maria-db';

export type Movie = {
    id: number,
    name: string,
    image: string,
    description: string,
    gender: string,
    release_year: string,
    rate: string
};

export type MovieServices = {
    list(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default') : Promise<Movie[]>,
    getById(id: string) : Promise<Movie>,
    getByFilter(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default', gender: string) : Promise<Movie[]>
};

export function buildMovieServices(db: SQL_DB) : MovieServices{
    return{
        async list(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default') : Promise<Movie[]>{
            return await db.runQuery(
                `SELECT * FROM movies;`
            );
        },
    
        async getById(id: string) : Promise<Movie>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES()`
            );
        },

        async getByFilter(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default', gender: string) : Promise<Movie[]>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES()`
            );
        }
    }
} 