import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS
} from '../actions/dummy-data';

const initState = {
  places: []
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, isFetching: true };
    case FETCH_PLACES_SUCCESS:
      return { ...state, places: action.payload };
    default:
      return { ...state };
  }
};
