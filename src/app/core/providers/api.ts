import { InjectionToken, Provider } from '@angular/core';
import { environment } from 'environments/environment';

export const API_CONFIG = new InjectionToken<string>('api_config');
export const apiConfigProvider: Provider = {
    provide: API_CONFIG,
    useValue: environment.api,
};
