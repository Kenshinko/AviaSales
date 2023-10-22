import { TOGGLE_FILTER, TARGET_FILTER } from './actionTypes';

export const actionToggleFilter = (id, isActive) => ({ type: TOGGLE_FILTER, id, isActive });
export const actionSelectFilter = (filter, list) => {
  const activeFilters = list.filter((filter) => filter.id !== 'all' && filter.isActive);

  if (activeFilters.length === 3) {
    return {
      type: TARGET_FILTER,
      filter: { name: 'Все', id: 'all', isActive: filter.isActive, value: -1 },
    };
  }

  return {
    type: TARGET_FILTER,
    filter,
  };
};
