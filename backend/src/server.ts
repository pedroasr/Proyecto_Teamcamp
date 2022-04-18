import fastify, { FastifyInstance } from 'fastify';
import type { Logger } from 'pino';
import { MovieServices } from './database/movie-service';
import { buildMovieRoutes } from './routes/movie/movie-events';

export function buildServer(logger: Logger, movieServices : MovieServices): FastifyInstance {
    const server = fastify({ logger });
    server.register(async function routes(server: FastifyInstance) {

        server.register(buildMovieRoutes(), { prefix: 'movie', movieServices});

    });

    return server;
}



