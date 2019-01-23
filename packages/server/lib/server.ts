import {createServer} from 'http';
import {injector} from './injector';
import {AppToken} from './app/appTokens';
import {LoggerToken} from './app/common/logging/loggingTokens';
import {ServerConfigToken} from './app/common/config/configTokens';

const app = injector.get(AppToken);
const logger = injector.get(LoggerToken);
const serverConfig = injector.get(ServerConfigToken);

createServer(app).listen(
    serverConfig.port,
    () => logger.info(`Server listen on port ${serverConfig.port}`),
);
