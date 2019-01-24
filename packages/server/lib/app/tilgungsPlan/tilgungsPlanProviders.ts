import {Provider} from 'injection-js';
import {tilgungsPlanServiceFactory} from './tilgungsPlanServiceFactory';
import {TilgungsplanServiceToken} from './tilgungsPlanTokens';
import {RouterToken} from '../common/http/routerTokens';
import {tilgungsPlanRouterFactory} from './tilgungsPlanRouterFactory';


export const tilgungsPlanProviders: Provider[] = [
    {provide: TilgungsplanServiceToken, useFactory: tilgungsPlanServiceFactory},
    {provide: RouterToken, useFactory: tilgungsPlanRouterFactory, deps: [TilgungsplanServiceToken], multi: true},
];
