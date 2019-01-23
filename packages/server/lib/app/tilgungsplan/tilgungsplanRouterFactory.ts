import {Router} from 'express';
import {TilgungsplanService} from './tilgungsplanTokens';

export const tilgungsplanRouterFactory = (tilgungsplanService: TilgungsplanService) => Router()

    .post('/tilgungsplans',
        (req, res, next) =>
            tilgungsplanService
                .createTilgungsplan()
                .then(tilgungsplan => res.json(tilgungsplan))
                .catch(next),
    )

;
