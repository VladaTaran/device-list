import { combineReducers } from 'redux';
import { reducer as NotifierStateReducer } from './notifier';
import { reducer as deviceManagementReducer } from './device-managment';
import { reducer as userProfileReducer } from './user-profile';
import { reducer as filtersReducer } from './filters';
import { reducer as devicesReducer } from './device-data';

export default combineReducers({
  notifications: NotifierStateReducer,
  deviceManagement: deviceManagementReducer,
  user: userProfileReducer,
  filters: filtersReducer,
  devices: devicesReducer
});
