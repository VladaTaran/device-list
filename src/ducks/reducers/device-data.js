import { FETCH_DATA_SUCCESS } from 'ducks/actions/device-data';

const initState = [];

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return  action.payload;
    default:
      return state;
  }
};
