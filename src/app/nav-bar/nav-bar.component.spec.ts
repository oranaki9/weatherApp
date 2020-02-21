import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { NgRedux } from "@angular-redux/store";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./nav-bar.component";
import { WeatherService } from "../weather/weather.service";
class NgReduxStub {
  state = {
    searchText: "tel aviv",
    isLoading: false,
    isFavorite: false,
    unitMode: "C",
    weather: "",
    myFavorite: [""]
  };
  dispatch(type: any, payload?: any) {
    return undefined;
  }

  getState() {
    return "";
  }
}
describe("NavBar component", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      providers: [WeatherService, { provide: NgRedux, useClass: NgReduxStub }]
    }).compileComponents();
  }));

  beforeEach(async () => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the nav bar", async () => {
    expect(component).toBeTruthy();
  });
  it("should navigate to home page", async () => {
    const navigateSpy = spyOn(router, "navigate");
    router.navigate(["/"]);
    expect(navigateSpy).toHaveBeenCalledWith(["/"]);
  });
});
