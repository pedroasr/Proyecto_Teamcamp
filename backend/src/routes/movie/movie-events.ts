import { FastifyInstance, FastifyPluginCallback, FastifyRequest } from "fastify";
import { getNextLink, getPrevLink } from "../../utils/url";
import { MovieServices } from "../../database/movie-service";

const movieSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        image: { type: 'string' }
    }
};

const listSchema = {
    tags: ['movies'],
    querystring: {
        page: { type: 'integer', minimum: 1, default: 1 },
        pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
        search: { type: 'string' },
        order: { type: 'string', default: 'default' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                results: {
                    type: 'array',
                    items: movieSchema
                },
                next: { type: 'string' },
                prev: { type: 'string' }
            }
        }
    }
};

const idMovieSchema = {
    tags: ['movies'],
    params: {
        id: { 
            type: 'string'
        }
    },
    response: {
        200: { type: 'object',
               properties: { 
                   results: {
                       type: 'object',
                       item: movieSchema
                   }
                } 
            }
    }
}

const filterMovieSchema = {
    tags: ['movies'],
    querystring: {
        page: { type: 'integer', minimum: 1, default: 1 },
        pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
        search: { type: 'string' },
        order: { type: 'string', default: 'default' }
    },
    params: {
        genre: { 
            type: 'string'
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                results: {
                    type: 'array',
                    item: movieSchema
                },
                next: { type: 'string' },
                prev: { type: 'string' },
            }
        }
    }
};

export function buildMovieRoutes() : FastifyPluginCallback<{movieServices : MovieServices}>{

    return function(fastify: FastifyInstance, opts, next){
        const { movieServices } = opts;

        async function listMovies(request : FastifyRequest<{Querystring: {page:number, pageSize:number, search:string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default'}}>){
            const { page, pageSize, search } = request.query;
            const movieList = await movieServices.list(page, pageSize, search, 'default');
            return {
                results: movieList,
                next: getNextLink(request, movieList),
                prev: getPrevLink(request)
            };
        }

        async function getMovieById(request : FastifyRequest<{ Params : { id: string } }>){
            const { id } = request.params;
            const movie = await movieServices.getById(id);
            return movie;
        }

        async function getByFilter(request : FastifyRequest<{Querystring: {page:number, pageSize:number, search:string, order: 'alphadescent' | 'alphaascent' | 'new' | 'old' | 'default'}, Params : { genre : string | string[] }}>) {
            const { page, pageSize, search } = request.query;
            const { genre } = request.params;  
            const movieList = await movieServices.getByFilter(page, pageSize, search, genre, 'default');
            return {
                results: movieList,
                next: getNextLink(request, movieList),
                prev: getPrevLink(request)
            };
        }

        fastify.get('/', {...opts, schema: listSchema}, listMovies);
        fastify.get('/:id', {...opts, schema: idMovieSchema}, getMovieById);
        fastify.get('/:genre', {...opts, schema: filterMovieSchema}, getByFilter);
        next();
    };
}
