import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { WeatherService } from '../weather.service';
import { NgRedux } from '@angular-redux/store';
class NgReduxStub {
  dispatch(type: any, payload?: any) {
    return undefined
  }
}
describe("App component", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule,HttpClientModule],
      providers: [WeatherService
      ,
      { provide: NgRedux, useClass: NgReduxStub },
    ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });



});
