//https://v17.angular.io/guide/template-syntax 
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, { providers: [provideProtractorTestingSupport()] })
  .catch(err => console.error(err));
