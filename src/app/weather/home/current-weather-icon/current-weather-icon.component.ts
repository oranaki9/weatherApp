import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "src/app/store/store";

@Component({
  selector: "app-current-weather-icon",
  template: `
    <img src="assets/weather-icons/{{ weatherIcon | async }}.png" />
  `
})
export class CurrentWeatherIconComponent {
  @select((s: IAppState) => s.weather._weatherIcon) weatherIcon;
}
