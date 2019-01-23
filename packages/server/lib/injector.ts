import {Injector, ReflectiveInjector} from 'injection-js';
import {appProviders} from './app/appProviders';

export const injector: Injector =
    ReflectiveInjector.resolveAndCreate(appProviders);
