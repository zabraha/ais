import React from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
  placeholder?: string;
};

export const SearchBar: React.FC<Props> = ({ value, onChange, onClear, placeholder = 'Search articles...' }) => {
  return (
    <div className="search-bar" role="search">
      <input
        aria-label="Search articles"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {value && (
        <button className="clear-btn" onClick={onClear} aria-label="Clear search">
          Clear
        </button>
      )}
    </div>
  );
};