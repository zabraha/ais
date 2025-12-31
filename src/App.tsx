import React, { useState, useEffect } from 'react';
import type { Article, CategoryFilter, Category } from './types';
import { ARTICLES } from './data';
import { useDebouncedValue } from './hooks/useDebouncedValue';
import { SearchBar } from './components/SearchBar';
import { FiltersPanel } from './components/FiltersPanel';
import { ResultsList } from './components/ResultsList';
import { ArticleDetailModal } from './components/ArticleDetailModal';

const allCategories: Category[] = Array.from(new Set(ARTICLES.map((a) => a.category)));


const App: React.FC = () => {
  // UI state
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebouncedValue(query, 250);


  const [category, setCategory] = useState<CategoryFilter>('All');
  const [dateFrom, setDateFrom] = useState<string | undefined>(undefined);
  const [dateTo, setDateTo] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<'relevance' | 'date' | 'popularity'>('relevance');

  // Data state
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Detail view state
  const [selected, setSelected] = useState<Article | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  // Search history (last 5 queries)
  const [history, setHistory] = useState<string[]>([]);
  useEffect(() => {
    // initialize from localStorage if desired
    const h = localStorage.getItem('kb_history');
    if (h) {
      setHistory(JSON.parse(h));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('kb_history', JSON.stringify(history.slice(-5)));
  }, [history]);

  // Perform search (mocked with in-memory filter)
  useEffect(() => {
    const perform = async () => {
      setLoading(true);
      setError(null);
      try {
        // simulate delay
        await new Promise((r) => setTimeout(r, 300));

        let list = [...ARTICLES];

        // query filter
        if (debouncedQuery) {
          const q = debouncedQuery.toLowerCase();
          list = list.filter(
            (a) =>
              a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q)
          );
        }

        // category filter
        if (category !== 'All') {
          list = list.filter((a) => a.category === category);
        }

        // date range filter
        if (dateFrom) {
          list = list.filter((a) => a.createdDate >= dateFrom);
        }
        if (dateTo) {
          list = list.filter((a) => a.createdDate <= dateTo);
        }

        // sort
        list.sort((a, b) => {
          if (sort === 'relevance') return b.relevanceScore - a.relevanceScore;
          if (sort === 'date') return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
          // popularity
          return b.popularity - a.popularity;
        });

        setResults(list);
      } catch (err) {
        setError('Failed to load articles.');
      } finally {
        setLoading(false);
      }
    };

    perform();
  }, [debouncedQuery, category, dateFrom, dateTo, sort]);

  // handle search submit (record history)
  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim()) {
      setHistory((h) => [q, ...h.filter((x) => x !== q)].slice(0, 5));
    }
  };

  // open detail
  const openDetail = (a: Article) => {
    setSelected(a);
    setIsOpen(true);
  };
  const closeDetail = () => {
    setIsOpen(false);
  };

  // initial fetch-like run
  useEffect(() => {
    // prime with all articles
    setResults(ARTICLES);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>AI Powered Knowledge Base Search</h1>
        <p className="subtitle">Search, filter, and explore articles</p>
      </header>

      <div className="toolbar">
        <SearchBar
          value={query}
          onChange={(v) => setQuery(v)}
          onClear={() => setQuery('')}
          placeholder="Search articles by title or content..."
        />
        {history.length > 0 && (
          <div className="history">
            <span>Recent:</span>
            {history.map((h, i) => (
              <button key={i} className="history-item" onClick={() => handleSearch(h)}>
                {h}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="content">
        <FiltersPanel
          categories={allCategories}
          activeCategory={category}
          onCategoryChange={setCategory}
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateChange={(f, t) => {
            setDateFrom(f);
            setDateTo(t);
          }}
          sort={sort}
          onSortChange={setSort}
        />

        <main className="results-area" aria-label="Results and details">
          <ResultsList articles={results} onOpen={openDetail} loading={loading} />
          {error && <div className="error" role="alert">{error}</div>}
        </main>
      </div>

      <ArticleDetailModal article={selected} onClose={closeDetail} isOpen={isOpen} />

    </div>
  );
};

export default App;
