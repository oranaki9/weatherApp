import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./weather/home/search/search.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WeatherModule } from "./weather/weather.module";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { WeatherService } from "./weather/weather.service";
import { of } from "rxjs";
import { HomeComponent } from "./weather/home/home.component";
import { HttpClient } from "selenium-webdriver/http";
import { HttpClientModule } from "@angular/common/http";
import {  NgReduxModule } from "@angular-redux/store";
import { IAppState } from "./store/store";

describe("App component", () => {
  let component: AppComponent;
  let homeComponent: HomeComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [WeatherService]
    }).compileComponents();
  }));

  beforeEach(async () => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to favorite", async () => {
    const navigateSpy = spyOn(router, "navigate");
    router.navigate(["/favorite"]);
    expect(navigateSpy).toHaveBeenCalledWith(["/favorite"]);
  });
  it("should navigate to weather with tel aviv", async () => {
    const navigateSpy = spyOn(router, "navigate");
    router.navigate(["/weather/tel aviv"]);
    expect(navigateSpy).toHaveBeenCalledWith(["/weather/tel aviv"]);
  });
});
