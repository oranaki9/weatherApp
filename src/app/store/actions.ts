import { Action } from "./Action.interface";
// export enum WeatherActionTypes{
//   FETCH_DATA_REQUEST:
// }
export const FETCH_DATA_REQUEST: Action = { type: "FETCH_DATA_REQUEST" };
export const FETCH_DATA_SUCCESS: Action = { type: "FETCH_DATA_SUCCESS" };
export const RECEIVE_WEATHER_DATA: Action = { type: "RECEIVE_WEATHER_DATA" };
export const FAVORITE_ITEM_CLICKED: Action = { type: "FAVORITE_ITEM_CLICKED" };
export const SAVE_ITEM_IN_FAVORITE: Action = { type: "SAVE_ITEM_IN_FAVORITE" };
export const REMOVE_ITEM_FROM_FAVORITE: Action = {
  type: "REMOVE_ITEM_FROM_FAVORITE"
};
export const CHECK_IS_FAVORITE: Action = { type: "CHECK_IS_FAVORITE" };
export const TOGGLE_UNIT_MODE: Action = { type: "TOGGLE_UNIT_MODE" };
export const CITY_LOCATION_SUCCESS: Action = { type: "CITY_LOCATION_SUCCESS" };
