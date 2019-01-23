import {tilgungsplanServiceFactory} from './tilgungsplanServiceFactory';

export const TilgungsplanServiceToken = Symbol('TilgungsPlanService');
export type TilgungsplanService = ReturnType<typeof tilgungsplanServiceFactory>;
