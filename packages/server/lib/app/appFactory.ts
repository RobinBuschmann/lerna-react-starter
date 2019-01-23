import * as express from 'express';
import * as helmet from 'helmet';
import * as errorHandler from 'strong-error-handler';
import {Router} from 'express';

export const appFactory = (routers: Router[]) => express()

    .use(helmet())
    .use(routers)
    .use(errorHandler())

;
