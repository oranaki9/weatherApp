import { Component, OnInit } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "src/app/store/store";
import { Action } from 'src/app/store/Action.interface';
import { TOGGLE_UNIT_MODE } from 'src/app/store/actions';

@Component({
  selector: "app-toggle-unit",
  templateUrl: "./toggle-unit.component.html"
})
export class ToggleUnitComponent implements OnInit {
  @select() unitMode;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}
  toggleUnit(mode: string) {
    if (mode !== this.ngRedux.getState().unitMode) {
      this.dispatch({ type: TOGGLE_UNIT_MODE.type, payload: mode });
    }
  }
  dispatch(action: Action): void {
    this.ngRedux.dispatch(action);
     }
}
