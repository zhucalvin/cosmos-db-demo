import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

export const appConfig: ApplicationConfig = {

  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(CommonModule, BrowserAnimationsModule, MatNativeDateModule),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
  ],
};
