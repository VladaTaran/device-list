import { all } from 'redux-saga/effects';

import { dummyDataSagas } from './device-management';
import { deviceData } from './device-data';

export default function* rootSaga() {
  yield all([
    ...dummyDataSagas,
    ...deviceData
  ]);
}
