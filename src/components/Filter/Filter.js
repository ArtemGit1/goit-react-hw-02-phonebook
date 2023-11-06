import React from 'react';

const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    name="filter"
    value={filter}
    onChange={onFilterChange}
    placeholder="Пошук контактів"
  />
);

export default Filter;
