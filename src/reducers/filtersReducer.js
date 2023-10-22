import { TOGGLE_FILTER, TARGET_FILTER } from '../actions/actionTypes';

// ************** STATE ************** //
const filters = {
  filtersList: [
    { name: 'Все', id: 'all', isActive: false, value: -1 },
    { name: 'Без пересадок', id: 'no-transfers', isActive: false, value: 0 },
    { name: '1 пересадка', id: 'one-transfer', isActive: false, value: 1 },
    { name: '2 пересадки', id: 'two-transfers', isActive: false, value: 2 },
    { name: '3 пересадки', id: 'three-transfers', isActive: false, value: 3 },
  ],
  lastFilter: { name: 'Все', id: 'all', isActive: false, value: -1 },
};
// *********************************** //

export const filtersReducer = (state = filters, action) => {
  const allFilter = state.filtersList.find((filter) => filter.id === 'all');
  const allFiltersActive = state.filtersList.filter(
    (filter) => filter.id !== 'all' && filter.isActive
  );
  switch (action.type) {
    case TOGGLE_FILTER:
      if (action.id === 'all') {
        if (allFilter.isActive) {
          return {
            ...state,
            filtersList: state.filtersList.map((filter) => {
              return { ...filter, isActive: false };
            }),
          };
        }

        if (!allFilter.isActive) {
          return {
            ...state,
            filtersList: state.filtersList.map((filter) => {
              return { ...filter, isActive: true };
            }),
          };
        }
      }

      return {
        ...state,
        filtersList: state.filtersList.map((filter) => {
          if (allFiltersActive.length === 3 && !action.isActive) {
            return { ...filter, isActive: true };
          }

          if (filter.id === 'all') {
            return { ...filter, isActive: false };
          }

          if (action.id === filter.id) {
            return { ...filter, isActive: !filter.isActive };
          }

          return filter;
        }),
      };

    case TARGET_FILTER:
      return { ...state, lastFilter: { ...action.filter } };

    default:
      return state;
  }
};
