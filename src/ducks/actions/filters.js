export const FILTERS = 'FILTERS';
export const RESET = 'RESET';

export const setFilters = payload => ({
  type: FILTERS,
  payload,
});

export const resetFilters = payload => ({
  type: RESET,
  payload
})
