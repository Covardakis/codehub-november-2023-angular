import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Import providers from HttpClientModule, to use in REST service
    importProvidersFrom(HttpClientModule),
    // Provide Routes
    provideRouter(routes)]
};
