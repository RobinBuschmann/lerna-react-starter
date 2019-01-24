import {Provider} from 'injection-js';
import {tilgungsPlanProviders} from './tilgungsPlan/tilgungsPlanProviders';
import {appFactory} from './appFactory';
import {RouterToken} from './common/http/routerTokens';
import {AppToken} from './appTokens';
import {commonProviders} from './common/commonProviders';

export const appProviders: Provider[] = [
    {provide: AppToken, useFactory: appFactory, deps: [RouterToken]},
    ...commonProviders,
    ...tilgungsPlanProviders,
];
