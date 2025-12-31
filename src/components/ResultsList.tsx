import React from 'react';
import type { Article } from '../types';
import { ResultCard } from './ResultCard';

type Props = {
  articles: Article[];
  onOpen: (a: Article) => void;
  loading?: boolean;
};

export const ResultsList: React.FC<Props> = ({ articles, onOpen, loading }) => {
  if (loading) {
    return <div className="loading">Loading articles...</div>;
  }

  if (!articles.length) {
    return <div className="empty">No articles found.</div>;
  }

  return (
    <div className="results-list" aria-label="Search results">
      {articles.map((a) => (
        <ResultCard key={a.id} article={a} onOpen={onOpen} />
      ))}
    </div>
  );
};