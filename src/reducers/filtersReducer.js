import { TOGGLE_FILTER } from '../actions/actionTypes';

// ************** STATE ************** //
const filters = [
  { name: 'Все', id: 'all', isActive: false, value: -1 },
  { name: 'Без пересадок', id: 'no-transfers', isActive: true, value: 0 },
  { name: '1 пересадка', id: 'one-transfer', isActive: false, value: 1 },
  { name: '2 пересадки', id: 'two-transfers', isActive: false, value: 2 },
  { name: '3 пересадки', id: 'three-transfers', isActive: false, value: 3 },
];
// *********************************** //

export const filtersReducer = (state = filters, action) => {
  const allFilter = state.find((filter) => filter.id === 'all');
  const allFiltersActive = state.filter((filter) => filter.id !== 'all' && filter.isActive);

  switch (action.type) {
    case TOGGLE_FILTER:
      if (action.id === 'all') {
        if (allFilter.isActive) {
          return state.map((filter) => {
            return { ...filter, isActive: false };
          });
        }

        if (!allFilter.isActive) {
          return state.map((filter) => {
            return { ...filter, isActive: true };
          });
        }
      }

      return state.map((filter) => {
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
      });

    default:
      return state;
  }
};
