import {Router} from 'express';
import {TilgungsplanService} from './tilgungsPlanTokens';

export const tilgungsPlanRouterFactory = (tilgungsplanService: TilgungsplanService) => Router()

    .post('/tilgungs-plans',
        (req, res, next) =>
            tilgungsplanService
                .createTilgungsplan(req.body)
                .then(tilgungsplan => res.json(tilgungsplan))
                .catch(next),
    )

;
