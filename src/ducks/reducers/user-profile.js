import { SET_USER_DATA } from '../actions/user-profile';

const initState = {
  data: {
    email: 'User Email',
    role: 'user'
  }
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, data: action.user };
    default:
      return { ...state };
  }
};
