import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
declare const gtag;

@Component({
  selector: "app-root",
  template: `
    <header>
      <app-nav-bar></app-nav-bar>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  
  constructor(router: Router) {
    const navEndsEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndsEvents.subscribe((event: NavigationEnd) => {
      gtag("config", "UA-148398666-1", {
        page_path: event.urlAfterRedirects // sending the url the user is requested
      });
      gtag("config", "GA_MEASUREMENT_ID", {
       user_id:'USER_ID' // sending the url the user is requested
      });
    });
  }
}
