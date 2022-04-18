import { buildConfig } from './config';
import gracefulShutdown from './graceful-shutdown';
import 'make-promises-safe';
import { buildApp } from './app';
import { buildLogger } from './logger';

const config = buildConfig();
const logger = buildLogger(config.log);

async function main() {
    logger.info(`Starting ${config.projectName}`);
    const app = await buildApp(config);

    const { http } = config;
    await app.getServer().listen(http.port, http.host);
    process.on('SIGTERM', gracefulShutdown(app, logger));
    process.on('SIGINT', gracefulShutdown(app, logger));
}

main().catch(error => {
    logger.error(
        `Error while starting up ${config.projectName}. ${error.message}`
    );
    process.exit(1);
});