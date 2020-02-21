import { NgModule } from "@angular/core";
import { FavoritesComponent } from "./favorites.component";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { FavoriteRoutingModule } from "./favorite-routing.module";
import { CurrentTempComponent } from '../home/current-temp/current-temp.component';
@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, AngularMaterialModule, FavoriteRoutingModule]
})
export class FavoriteModule {}
