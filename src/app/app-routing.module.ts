import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./weather/home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "", redirectTo: "/weather", pathMatch: "full" },
  { path: "weather", component: HomeComponent },
  { path: "weather/:cityName", component: HomeComponent },

  {
    path: "favorite",
    loadChildren: () =>
      import("./weather/favorites/favorite.module").then(
        mod => mod.FavoriteModule
      )
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
