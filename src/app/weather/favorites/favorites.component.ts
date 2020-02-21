import { Component } from "@angular/core";
import { IAppState } from "src/app/store/store";
import { select } from "@angular-redux/store";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent {
  @select((s: IAppState) => s.myFavorite) myFavorite;
  @select() unitMode;
}
