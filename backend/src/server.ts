import fastify, {
    FastifyInstance,
    FastifyPluginCallback,
    FastifySchema
} from 'fastify';
import type { Logger } from 'pino';

import { MovieServices } from './database/movie-service';

import { buildMovieRoutes } from './routes/movie/movie-events';

export function buildServer(logger: Logger, movieService : MovieServices): FastifyInstance {
    const server = fastify({ logger });

    server.register(buildMovieRoutes(movieService), { prefix: '/movie'});

    return server;
}



