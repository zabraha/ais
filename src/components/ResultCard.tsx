import React from 'react';
import type { Article } from '../types';

type Props = {
  article: Article;
  onOpen: (a: Article) => void;
};

function trimContent(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + '…';
}


export const ResultCard: React.FC<Props> = ({ article, onOpen }) => {
  return (
    <div className="result-card" onClick={() => onOpen(article)} role="button" aria-label={article.title}>
      <div className="card-header">
        <h3 className="title">{article.title}</h3>
        <span className="relevance">{article.relevanceScore.toFixed(2)}</span>
      </div>
      <p className="snippet">{trimContent(article.content, 50)}</p>
      <div className="card-meta">
        <span className="badge">{article.category}</span>
        <span className="date">{new Date(article.createdDate).toLocaleDateString()}</span>
        <span className="popularity">Views: {article.popularity}</span>
      </div>
    </div>
  );
};