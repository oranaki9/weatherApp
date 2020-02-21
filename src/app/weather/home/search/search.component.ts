import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  CHECK_IS_FAVORITE,
  CITY_LOCATION_SUCCESS
} from 'src/app/store/actions';
import { CityInfo } from 'src/data-structure/city-info.interface';

import { Forecast } from 'src/data-structure/Forecast.interface';
import { cToF } from '../../../../data-structure/utils';
import { Action } from 'src/app/store/Action.interface';
import { Subject, of, Observable } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(
    public weatherData: WeatherService,
    private ngRedux: NgRedux<IAppState>
  ) { }
  @select('searchText') searchText;
  @select() isFavorite;
  destroy$: Subject<boolean> = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  ngOnInit() {
    if (navigator.geolocation && !this.ngRedux.getState().weather) {
      navigator.geolocation.getCurrentPosition(
        this.onPositionAccept,
        this.onPositionError
      );
    } else {
      this.searchCity(this.ngRedux.getState().searchText);
    }
  }

  getCityWeather(cityInfo): Observable<null | any> {
    return !cityInfo.length ? of(null) : this.weatherData.getWeatherData(cityInfo[0].Key, cityInfo[0].LocalizedName);
  }
  searchCity(city) {
    if (!city) {
      return;
    }
    this.dispatch({ type: CHECK_IS_FAVORITE.type, payload: city });
    if (this.ngRedux.getState().isFavorite) {
      return;
    }
    this.dispatch({ type: FETCH_DATA_REQUEST.type });
    this.weatherData.getCityKey(city)
      .pipe(takeUntil(this.destroy$),
        switchMap((cityInfo: CityInfo[]) => this.getCityWeather(cityInfo)))
      .subscribe(data => {
        if (!data) {
          alert('city not found!');
          this.dispatch({
            type: FETCH_DATA_SUCCESS.type,
            payload: { weather: this.weather, searchText: city }
          });
          return;
        }
        console.log(data);
        const weatherData: Forecast = this.fetchWeatherData(data);
        this.dispatch({
          type: FETCH_DATA_SUCCESS.type,
          payload: { weather: weatherData, searchText: city }
        });
        console.log(weatherData);
      });
  }
  fetchWeatherData(data: any): Forecast {
    return {
      _cityId: data[2].cityKey,
      _cityName: data[2].cityName,
      _futureForecast: data[1].DailyForecasts,
      _weatherIcon: data[0][0].WeatherIcon,
      _weatherText: data[0][0].WeatherText,
      _temperature:
        this.ngRedux.getState().unitMode === 'C'
          ? data[0]
          [0].Temperature.Metric.Value
          : cToF(data[0][0].Temperature.Metric.Value),
      _isDayTime: data[0][0].IsDayTime
    };
  }
  onPositionAccept = position => {
    const latlon = position.coords.latitude + ',' + position.coords.longitude;
    this.weatherData.getCityByLocation(latlon);
    this.weatherData
      .getCityByLocation(latlon).pipe(takeUntil(this.destroy$))
      .subscribe((cityName: string) => {
        this.dispatch({ type: CITY_LOCATION_SUCCESS.type, payload: cityName });
        this.searchCity(cityName);
      });
  }
  onPositionError = positionError => {
    this.searchCity('tel aviv');
  }
  get weather(): Forecast {
    return this.ngRedux.getState().weather;
  }
  dispatch(action: Action): void {
    this.ngRedux.dispatch(action);
  }
}
