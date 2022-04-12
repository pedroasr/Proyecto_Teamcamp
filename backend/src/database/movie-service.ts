import { listenerCount } from 'process';
import { SQL_DB } from './maria-db';

export type Movie = {

};

export type MovieServices = {
    list(page: number, pageSize: number, search: string) : Promise<Movie[]>,
    getById(id: string),
    getByFilter(filter: string | string[])
};

export function buildMovieService(db: SQL_DB,
                                  movieService : MovieServices){
    return{
        async list(page: number, pageSize: number, search: string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old') : Promise<Movie[]>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES('${message.message}', '${message.to}', '${message.from}')`
            );
        },
    
        async getById(id: string) : Promise<Movie>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES('${message.message}', '${message.to}', '${message.from}')`
            );
        },

        async getByFilter(filter: string | string[], order: 'alphadescent' | 'alphaascent' | 'new' | 'old') : Promise<Movie[]>{
            return await db.runQuery(
                `INSERT INTO messages(message, target, origin) VALUES('${message.message}', '${message.to}', '${message.from}')`
            );
        }
    }
} 