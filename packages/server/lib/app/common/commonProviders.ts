import {Provider} from 'injection-js';
import {LoggerToken} from './logging/loggingTokens';
import {configProviders} from './config/configProviders';

export const commonProviders: Provider[] = [
    {provide: LoggerToken, useValue: console},
    ...configProviders,
];
