import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { DatePipe } from "../pipes/day-date/day-date.pipe";
import { CityNameComponent } from "./home/city-name/city-name.component";
import { CurrentTempComponent } from "./home/current-temp/current-temp.component";
import { CurrentWeatherIconComponent } from "./home/current-weather-icon/current-weather-icon.component";
import { FutureForecastComponent } from "./home/future-forecast/future-forecast.component";
import { SearchComponent } from "./home/search/search.component";
import { ToggleUnitComponent } from "./home/toggle-unit/toggle-unit.component";
import { FetchIconPhrasePipe } from "../pipes/fetchDayTime/‏‏fetch-day-time-phrase";
import { FetchIconPipe } from "../pipes/fetchDayTime/‏‏fetch-day-time-icon";
@NgModule({
  declarations: [
    HomeComponent,

    DatePipe,
    FetchIconPhrasePipe,
    FetchIconPipe,
    CityNameComponent,
    CurrentTempComponent,
    CurrentWeatherIconComponent,
    FutureForecastComponent,
    SearchComponent,
    ToggleUnitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule
  ]
})
export class WeatherModule {}
