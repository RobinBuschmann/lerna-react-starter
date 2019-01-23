import {InjectionToken} from 'injection-js';
import * as serverConfig from './serverConfig';

export const ServerConfigToken = new InjectionToken<typeof serverConfig>('ServerConfig');
