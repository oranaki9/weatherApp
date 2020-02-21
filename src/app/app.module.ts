import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AngularMaterialModule } from "./angular-material.module";
import { HttpErrorInterceptor } from "./error.inteceptor";
import { WeatherModule } from "./weather/weather.module";
import {
  NgRedux,
  NgReduxModule,
  DevToolsExtension
} from "@angular-redux/store";
import { IAppState, rootReducer, INIT_STATE } from "./store/store";

@NgModule({
  declarations: [AppComponent, NavBarComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    WeatherModule,
    NgReduxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension
  ) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    this.ngRedux.configureStore(rootReducer, INIT_STATE, [], enhancers);
  }
}
