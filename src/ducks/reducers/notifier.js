import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR } from '../actions/notifier';

const initState = {
  notifications: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key: new Date().getTime() + Math.random(),
            ...action.notification,
          },
        ],
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map(notification => (
          (action.dismissAll || notification.key === action.key)
            ? { ...notification, dismissed: true }
            : { ...notification }
        )),
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.key !== action.key,
        ),
      };

    default:
      return state;
  }
};
