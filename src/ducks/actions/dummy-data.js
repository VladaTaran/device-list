export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const DoGetPlaces = (ids) => ({
  type: FETCH_PLACES,
  ids,
});

export const GetPlacesFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});

export const GetPlacesSuccess= (data) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: data,
});
