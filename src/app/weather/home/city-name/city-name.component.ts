import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "src/app/store/store";

@Component({
  selector: "app-city-name",
  template: `
    <div>
      {{ cityName | async }}
    </div>
  `
})
export class CityNameComponent {
  @select((s: IAppState) => s.weather._cityName) cityName;
}
