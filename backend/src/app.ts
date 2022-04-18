import { FastifyInstance } from 'fastify';
import { buildServer } from './server';
import { buildMovieService } from './database/movie-service';
import { Config } from './config';
import { buildSQLDatabase } from './database/maria-db';
import { buildLogger } from './logger';


export async function buildApp(config : Config) {
    const mariadb = buildSQLDatabase(config.maria);
    const logger = buildLogger(config.log);
    const movieService = buildMovieService(mariadb);
    const server = buildServer(logger, movieService);
    return {
        async close(): Promise<void> {
            await server.close();
        },
        getServer(): FastifyInstance {
            return server;
        }
    };
}

export type App = Awaited<ReturnType<typeof buildApp>>;
