import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importing HttpClientModule for HTTP requests

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), // This is the new way to provide HttpClient in Angular 16
    // Note: The `provideHttpClient` function is used to provide the HttpClient service in Angular applications.
  
  ]
};
// The `appConfig` object is an Angular ApplicationConfig that provides the necessary configuration for the application.
// It includes providers for zone change detection, routing, and HTTP client services.  