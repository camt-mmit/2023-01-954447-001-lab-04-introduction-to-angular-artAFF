import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

/*npx ng build --configuration=production --base-href=xxx
npx ng generate component
npx ng serve

npx gh-pages -d src

1.npx gh-pages -d dist
2.yarn run build

Navigator.buildID
Navigator.userActivation
Navigator.languages
Navigator.cookieEnabled
Navigator.hardwareConcurrency
Navigator.maxTouchPoints */
