
export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const NotifyError = (message) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message: message,
    key: new Date().getTime() + Math.random(),
    options: { variant: 'error' },
  }
});

export const NotifySuccess = (message) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    message: message,
    key: new Date().getTime() + Math.random(),
    options: { variant: 'success' },
  }
});

export const EnqueueSnackbar = (notification) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    ...notification,
    key: new Date().getTime() + Math.random(),
  }
});

export const CloseSnackbar= (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const RemoveSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});


