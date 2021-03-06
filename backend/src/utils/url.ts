import { FastifyRequest } from 'fastify';
import { Movie } from '../database/movie-service';

function removeEndSlash(path: string): string {
    if (path[path.length - 1] === '/') {
        return path.slice(0, -1);
    }
    return path;
}

export function getUrl(request: FastifyRequest, path: string | null): string {
    const { hostname, protocol } = request;
    return `${protocol}://${hostname}${path ? removeEndSlash(path) : ''}`;
}

function getPagedLink(request: FastifyRequest, page: number, pageSize: number, queryStrings: { [key:string]: string | number }): string {
    const appendQueryStrings = Object.keys(queryStrings).map(k => `&${k}=${encodeURIComponent(queryStrings[k])}`).join();
    const path = request.url.split('?')[0];
    return getUrl(request, `${path}?page=${page}&pageSize=${pageSize}${appendQueryStrings}`);
}

export function getPrevLink(request: FastifyRequest<{ Querystring: { page: number, pageSize: number, [key:string]: string | number } }>): string | undefined {
    const { page, pageSize, ...rest } = request.query;
    return page !== 1 ? getPagedLink(request, page - 1, pageSize, rest) : undefined;
}

export function getNextLink(request: FastifyRequest<{ Querystring: { page: number, pageSize: number, [key:string]: string | number } }>, results: Movie[]): string | undefined {
    const { page, pageSize, ...rest } = request.query;
    return results.length === pageSize ? getPagedLink(request, page + 1, pageSize, rest) : undefined;
}