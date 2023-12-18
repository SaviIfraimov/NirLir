import React, { useState } from 'react';
import './ListFilter.css';

interface ListFilterProps {
  onFilterChange: (filterText: string) => void;
}

const ListFilter: React.FC<ListFilterProps> = ({ onFilterChange }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter">
      <label>Filter by status: </label>
      <input type="text" value={filterText} onChange={handleFilterChange} />
    </div>
  );
};

export default ListFilter;
