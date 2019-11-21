import { put, takeEvery, call } from 'redux-saga/effects';

import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_DATA_FAILED,
} from '../actions/dummy-data';

import { fetchPlaces } from 'clients/client1';
import { ENQUEUE_SNACKBAR } from 'ducks/actions/notifier';

export function* fetchDataApi(action) {
  const response = yield call(fetchPlaces, action);

  try {
    yield put({
      type: FETCH_PLACES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILED,
      error: error || 'Server error',
    });
    yield put({
      type: ENQUEUE_SNACKBAR,
      notification: {
        message: 'Data fetching: ' + response.message || 'Server error',
        options: {
          variant: 'error'
        }
      }
    });
  }
}

export const dummyDataSagas = [
  takeEvery(FETCH_PLACES, fetchDataApi)
];
