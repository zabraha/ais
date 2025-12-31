export type Category = 'Technology' | 'Environment' | 'Business' | 'Automotive';
export type CategoryFilter = Category | 'All';



export interface Article {
  id: string;
  title: string;
  content: string;
  category: Category;
  tags: string[];
  relevanceScore: number; // 0..1 or any score
  createdDate: string; // ISO-like: 'YYYY-MM-DD'
  lastUpdated: string; // ISO-like: 'YYYY-MM-DD'
  popularity: number; // e.g., viewCount
}