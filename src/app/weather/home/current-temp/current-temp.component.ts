import { Component } from "@angular/core";
import { select } from "@angular-redux/store";
import { IAppState } from "src/app/store/store";

@Component({
  selector: "app-current-temp",
  template: `
    <div>
      <label>{{ currentTempValue | async }}</label>
      <label class="unit">{{ unitMode | async }}</label>
    </div>
  `,
  styles: [
    `
      .unit::after {
        content: "°";
      }
    `
  ]
})
export class CurrentTempComponent {

  @select((s: IAppState) => s.weather._temperature)
  currentTempValue;
  @select() unitMode;

}
