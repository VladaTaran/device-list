export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const getDevices = () => ({
  type: FETCH_DATA,
});

export const GetDataFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});

export const GetDataSuccess= (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
