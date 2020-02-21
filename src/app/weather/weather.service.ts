import { CurrentCityTempeture } from './../../data-structure/CurrentCityTempeture.interface';
import { CityInfo } from './../../data-structure/city-info.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { FutureForecast } from 'src/data-structure/futureForecast.interface';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeatherData(cityKey: string, cityName: string)
  : Observable<[CurrentCityTempeture, FutureForecast, { cityKey: string, cityName: string }]> {
    return forkJoin(
      this.getCityCurrentTemperature(cityKey),
      this.getCityFutureForecast(cityKey),
      of({ cityKey, cityName })
    );
  }
  getCityByLocation(latlon: string): Observable<any> {
    return this.http
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.API_KEY}&q=${latlon}
    ` )
      .pipe(
        map((result: any) => {
          return result.LocalizedName;
        })
      );
  }
  getCityKey(searchText): Observable<CityInfo[]> {
    return this.http.get<CityInfo[]>(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.API_KEY}&q=${searchText}`
    );
  }
  getCityCurrentTemperature(cityKey: string): Observable<CurrentCityTempeture> {
    return this.http.get<CurrentCityTempeture>(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${environment.API_KEY}`
    );
  }
  getCityFutureForecast(cityKey: string): Observable<FutureForecast> {
    return this.http.get<FutureForecast>(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${environment.API_KEY}`
    );
  }
}
