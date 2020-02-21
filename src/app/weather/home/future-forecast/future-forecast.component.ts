import { Component } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "src/app/store/store";
import { fToC } from "src/data-structure/utils";

@Component({
  selector: "app-future-forecast",
  template: `
    <div *ngFor="let f of futureForecast | async">
      <div class="weater-result__item">
        <div>{{ f.Date | day_date }}</div>
        <div>{{ getTemp(f) }}</div>
        <img src="assets/weather-icons/{{ f | fetch_icon }}.png" />

        <div>{{ f | fetch_icon_phrase }}</div>
      </div>
    </div>
  `,
  styleUrls: ["./future-forecast.component.css"]
})
export class FutureForecastComponent {
  @select((s: IAppState) => s.weather._futureForecast) futureForecast;
  constructor(private ngRedux: NgRedux<IAppState>) {}
  getTemp(forecast: any) {
    if (this.ngRedux.getState().unitMode === "F") {
      return `${forecast.Temperature.Minimum.Value} -${
        forecast.Temperature.Maximum.Value
      }F°`;
    } else {
      return `${fToC(forecast.Temperature.Minimum.Value)} -${fToC(
        forecast.Temperature.Maximum.Value
      )}C°`;
    }
  }
}
