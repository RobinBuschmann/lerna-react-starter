import {tilgungsPlanServiceFactory} from './tilgungsPlanServiceFactory';

export const TilgungsplanServiceToken = Symbol('TilgungsPlanService');
export type TilgungsplanService = ReturnType<typeof tilgungsPlanServiceFactory>;
