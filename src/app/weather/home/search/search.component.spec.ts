import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { NgRedux } from "@angular-redux/store";
import { SearchComponent } from "./search.component";
import { WeatherService } from "../../weather.service";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
describe("SearchComponent component", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
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
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the search component", async () => {
    expect(component).toBeTruthy();
  });

  it("should get tel aviv location", async () => {
    const cityCoordinate = "32.083226,34.776992";
    const service = TestBed.get(WeatherService);
    const spy = spyOn(service, "getCityByLocation").and.returnValue(
      of("tel aviv")
    );
    service.getCityByLocation(cityCoordinate);
    expect(spy).toHaveBeenCalledWith(cityCoordinate);
  });
});
