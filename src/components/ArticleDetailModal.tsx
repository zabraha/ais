import React from 'react';
import type { Article } from '../types';

type Props = {
  article?: Article;
  onClose: () => void;
  isOpen: boolean;
};

export const ArticleDetailModal: React.FC<Props> = ({ article, onClose, isOpen }) => {
  if (!isOpen || !article) return null;

  return (
    <div role="dialog" aria-label="Article detail" className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2>{article.title}</h2>
        <div className="meta">
          <span className="badge">{article.category}</span>
          <span>{new Date(article.createdDate).toLocaleDateString()}</span>
        </div>
        <p>{article.content}</p>
      </div>
    </div>
  );
};
