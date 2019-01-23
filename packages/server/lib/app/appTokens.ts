import {InjectionToken} from 'injection-js';
import {Application} from 'express';

export const AppToken = new InjectionToken<Application>('App');
