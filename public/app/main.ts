// Files imported in order for webpack
// to resolve all the depencencies 
// and bundle them into one file

// Core Angular2 files
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

// Style files
import '../styles/main.scss';

// Angular2 bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic().bootstrapModule(AppModule);
