import {Provider} from 'injection-js';
import {tilgungsplanProviders} from './tilgungsplan/tilgungsplanProviders';
import {appFactory} from './appFactory';
import {RouterToken} from './common/http/routerTokens';
import {AppToken} from './appTokens';
import {commonProviders} from './common/commonProviders';

export const appProviders: Provider[] = [
    {provide: AppToken, useFactory: appFactory, deps: [RouterToken]},
    ...commonProviders,
    ...tilgungsplanProviders,
];
