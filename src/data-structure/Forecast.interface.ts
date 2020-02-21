export interface Forecast {
  _cityId: string;
  _cityName: string;
  _weatherText: string;
  _weatherIcon: number;
  _isDayTime: boolean;
  _temperature: number;
  _futureForecast: any[];
}
