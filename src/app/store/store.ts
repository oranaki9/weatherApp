import { Forecast } from "src/data-structure/Forecast.interface";
import { tassign } from "tassign";
import { cToF, fToC } from "../../data-structure/utils";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FAVORITE_ITEM_CLICKED,
  REMOVE_ITEM_FROM_FAVORITE,
  SAVE_ITEM_IN_FAVORITE,
  CHECK_IS_FAVORITE,
  TOGGLE_UNIT_MODE,
  CITY_LOCATION_SUCCESS
} from "./actions";
import { Action } from "./Action.interface";
export interface IAppState {
  searchText: string;
  isLoading: boolean;
  isFavorite: boolean;
  unitMode: string;
  weather: Forecast;
  myFavorite: Forecast[];
}
export const INIT_STATE = {
  searchText: "",
  isLoading: true,
  isFavorite: false,
  unitMode: "C",
  weather: null,
  myFavorite: []
};
function cityLocationSuccess(state, action) {
  return {
    ...state,
    searchText: action.payload
  };
}

function fetchDateSuccess(state, action: Action) {
  return {
    ...state,
    isLoading: false,
    weather: action.payload.weather,
    searchText: action.payload.searchText
  };
}
function fetchDateRequest(state, action: Action) {
  return { ...state, isLoading: true };
}
function favoriteItemClicked(state, action: Action) {
  return {
    ...state,
    searchText: action.payload
  };
}
function checkIsFavorite(state, action: Action) {
  const res = state.myFavorite.find((value: Forecast) => {
    return value._cityName.toLowerCase() === action.payload.toLowerCase();
  });
  return {
    ...state,
    isFavorite: res ? true : false,
    weather: res ? res : state.weather
  };
}
function removeItemFromFavorite(state, action: Action) {
  return {
    ...state,
    myFavorite: state.myFavorite.filter(
      f => f._cityId !== state.weather._cityId
    ),
    isFavorite: false
  };
}
function saveItemInFavorite(state, action: Action) {
  return {
    ...state,
    myFavorite: state.myFavorite.concat(state.weather),
    isFavorite: true
  };
}
function toggleUnitMode(state, action: Action) {
  return tassign(state, {
    weather: {
      ...state.weather,
      _temperature:
        action.payload === "C"
          ? fToC(state.weather._temperature)
          : cToF(state.weather._temperature)
    },
    myFavorite: state.myFavorite.length
      ? state.myFavorite.map(m => {
          return {
            ...m,
            _temperature:
              action.payload === "C"
                ? fToC(m._temperature)
                : cToF(m._temperature)
          };
        })
      : state.myFavorite,
    unitMode: action.payload
  });
}
export function rootReducer(
  state: IAppState = INIT_STATE,
  action: Action
): IAppState {
  switch (action.type) {
    case FETCH_DATA_SUCCESS.type:
      return fetchDateSuccess(state, action);

    case FETCH_DATA_REQUEST.type:
      return fetchDateRequest(state, action);

    case FAVORITE_ITEM_CLICKED.type:
      return favoriteItemClicked(state, action);

    case CHECK_IS_FAVORITE.type:
      return checkIsFavorite(state, action);

    case SAVE_ITEM_IN_FAVORITE.type:
      return saveItemInFavorite(state, action);

    case REMOVE_ITEM_FROM_FAVORITE.type:
      return removeItemFromFavorite(state, action);

    case TOGGLE_UNIT_MODE.type:
      return toggleUnitMode(state, action);
    case CITY_LOCATION_SUCCESS.type:
      return cityLocationSuccess(state, action);

    default:
      return state;
  }
}
