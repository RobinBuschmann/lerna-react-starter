import {InjectionToken} from 'injection-js';

export const LoggerToken = new InjectionToken<Logger>('Logger');
export interface Logger {
    warn(message: string);
    info(message: string);
    error(message: string);
}
