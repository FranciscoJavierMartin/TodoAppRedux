import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'all';

export function filterReducer(
  state = initialState,
  action: fromFilter.actions
): fromFilter.validFilters {
  let res;

  switch (action.type) {
    case fromFilter.SET_FILTER:
      res = action.filter;
      break;
    default:
      res = state;
  }

  return res;
}
