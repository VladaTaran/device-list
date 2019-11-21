import { put, call, takeEvery } from 'redux-saga/effects';

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
} from '../actions/device-data';
import { fetchDevices } from 'clients/client1';

export function* getData() {
  const response = yield call(fetchDevices);
  try {
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILED,
      error: error || 'Server error',
    });
  }
}

export const deviceData = [
  takeEvery(FETCH_DATA, getData)
];
