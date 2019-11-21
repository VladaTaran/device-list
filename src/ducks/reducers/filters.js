import { FILTERS, RESET } from 'ducks/actions/filters';

const initState = {
  device_type: 'any',
  activation_status: 'any',
  place_id: 'any',
  protocol:'any'
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FILTERS:
      return action.payload;
    case RESET:
      return initState;
    default:
      return state;
  }
};