import {Provider} from 'injection-js';
import {tilgungsplanServiceFactory} from './tilgungsplanServiceFactory';
import {TilgungsplanServiceToken} from './tilgungsplanTokens';
import {RouterToken} from '../common/http/routerTokens';
import {tilgungsplanRouterFactory} from './tilgungsplanRouterFactory';


export const tilgungsplanProviders: Provider[] = [
    {provide: TilgungsplanServiceToken, useFactory: tilgungsplanServiceFactory},
    {provide: RouterToken, useFactory: tilgungsplanRouterFactory, deps: [TilgungsplanServiceToken], multi: true},
];
