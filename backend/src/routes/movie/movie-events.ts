import { FastifyRequest } from "fastify";
import { getNextLink, getPrevLink } from "../../utils/url";

const movieSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        image: { type: 'string' }
    }
};

const listSchema = {
    querystring: {
        page: { type: 'integer', minimum: 1, default: 1 },
        pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
        search: { type: 'string' }
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
    type: 'object',
    require: ['id'],
    properties: {
        id: { type: 'string',
              errorMessage: { type: 'Movie not found' } 
        }
    }
};






export function buildMovieRoutes(){

    async function listMovies(request : FastifyRequest<{Querystring: {page:number, pageSize:number, search:string}}>){
        const { page, pageSize, search } = request.query;
        const results = await rulesService.list(page, pageSize, search);
        return {
            results: results,
            next: getNextLink(request, results),
            prev: getPrevLink(request)
        };
    }

    async function getMovieById(request : FastifyRequest){}

}