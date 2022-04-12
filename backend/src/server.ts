import fastify, {
    FastifyInstance,
    FastifyPluginCallback,
    FastifySchema
} from 'fastify';
import type { Logger } from 'pino';

const VersionSchema: FastifySchema = {
    response: {
        '200': {
            type: 'object',
            properties: {
                version: { type: 'string' }
            }
        }
    }
};

const MessageSchema: FastifySchema = {
    body: {
        type: 'object',
        properties: {
            message: { type: 'string' },
            from: { type: 'string', require },
            to: { type: 'string' }
        }
    }
};
type MessageDTO = {
    message: string;
    from: string;
    to: string;
};

const userRepository = {
    getUsers() {
        return [
            { name: 'Juanjo', age: 42 },
            { name: 'Laura', age: 36 },
            { name: 'Pablo', age: 32 }
        ];
    },
    getUserById(userId: number) {
        return { name: 'Juaanjo', age: 42 };
    }
};
type UserRepo = typeof userRepository;

export function buildServer(logger: Logger): FastifyInstance {
    const server = fastify({ logger });
    server.get('/version', { schema: VersionSchema }, (req, reply) => {
        reply
            .status(200)
            .headers({ 'content-type': 'application/json' })
            .send({ version: '0.0.1' });
    });

    server.post<{ Body: MessageDTO }>(
        '/message',
        { schema: MessageSchema },
        (req, reply) => {
            const { from } = req.body;
            server.log.info(
                `/message from ${from} ${JSON.stringify(req.body)}`
            );
            reply
                .status(200)
                .headers({ 'content-type': 'application/json' })
                .send({ version: '0.0.1' });
        }
    );

    const userRoutes = buildUserRoutesPlugin();
    server.register(userRoutes, {
        prefix: '/users',
        userRepository
    });

    return server;
}

function buildUserRoutesPlugin(): FastifyPluginCallback<{
    userRepository: UserRepo;
}> {
    return function userRoutes(server, options, next) {
        const { userRepository } = options;

        server.get('/', { schema: {} }, (request, reply) => {
            reply.status(200).send(userRepository.getUsers());
        });

        server.get<{ Params: { userId: number } }>(
            '/:userId',
            { schema: {} },
            (request, reply) => {
                const { userId } = request.params;
                reply.status(200).send(userRepository.getUserById(userId));
            }
        );
        next();
    };
}
