import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../../store/store";
import {
  FAVORITE_ITEM_CLICKED,
  REMOVE_ITEM_FROM_FAVORITE,
  SAVE_ITEM_IN_FAVORITE
} from "../../store/actions";
import { Action } from 'src/app/store/Action.interface';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @select() searchText;
  @select() weather;
  @select() isLoading;
  @select() isFavorite;
  constructor(
    private route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {}
  dispatch(action: Action): void {
    this.ngRedux.dispatch(action);
     }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("cityName")) {
        this.dispatch({
          type: FAVORITE_ITEM_CLICKED.type,
          payload: paramMap.get("cityName")
        });
      }
    });
  }
  addToFavorite() {
    this.dispatch({ type: SAVE_ITEM_IN_FAVORITE.type });
  }
  removeFromFavorite() {
    this.dispatch({ type: REMOVE_ITEM_FROM_FAVORITE.type });
  }
}
