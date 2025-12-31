import React from 'react';
import type { Category, CategoryFilter } from '../types';

type Props = {
  categories: Category[];
  activeCategory: CategoryFilter;  // Use the union type
  onCategoryChange: (c: CategoryFilter) => void;
  dateFrom?: string;
  dateTo?: string;
  onDateChange: (from?: string, to?: string) => void;
  sort: 'relevance' | 'date' | 'popularity';
  onSortChange: (s: 'relevance' | 'date' | 'popularity') => void;
};

export const FiltersPanel: React.FC<Props> = ({
  categories,
  activeCategory = 'All',
  onCategoryChange,
  dateFrom,
  dateTo,
  onDateChange,
  sort,
  onSortChange,
}) => {
  return (
    <aside className="filters-panel" aria-label="Filters">
      <div className="section">
        <h4>Category</h4>
        <button
          className={activeCategory === 'All' ? 'active' : ''}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className={activeCategory === c ? 'active' : ''}
            onClick={() => onCategoryChange(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="section">
        <h4>Date range</h4>
        <input
          type="date"
          value={dateFrom ?? ''}
          onChange={(e) => onDateChange(e.target.value, dateTo)}
        />
        <input
          type="date"
          value={dateTo ?? ''}
          onChange={(e) => onDateChange(dateFrom, e.target.value)}
        />
      </div>

      <div className="section">
        <h4>Sort by</h4>
        {(['relevance', 'date', 'popularity'] as const).map((s) => (
          <button key={s} className={sort === s ? 'active' : ''} onClick={() => onSortChange(s)}>
            {s}
          </button>
        ))}
      </div>
    </aside>
  );
};