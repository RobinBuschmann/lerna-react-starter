import {Provider} from 'injection-js';
import {ServerConfigToken} from './configTokens';
import * as serverConfig from './serverConfig';

export const configProviders: Provider[] = [
    {provide: ServerConfigToken, useValue: serverConfig},
];
