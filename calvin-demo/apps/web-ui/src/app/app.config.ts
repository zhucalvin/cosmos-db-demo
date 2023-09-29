import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { MaterialModule } from '@libs/common/ui/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

export const appConfig: ApplicationConfig = {

  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(CommonModule, BrowserAnimationsModule, MaterialModule, MatNativeDateModule),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
  ],
};
