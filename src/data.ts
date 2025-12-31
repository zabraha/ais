import type { Article } from './types';

export const ARTICLES: Article[] = [
  {
    "id": "art-001",
    "title": "AI Revolution in Healthcare",
    "content": "Artificial intelligence is transforming diagnostics and patient care with unprecedented accuracy. Machine learning models now predict diseases earlier than ever before.",
    "category": "Technology",
    "tags": ["AI", "Healthcare", "MachineLearning", "Innovation"],
    "relevanceScore": 0.95,
    "createdDate": "2025-01-15",
    "lastUpdated": "2025-12-20",
    "popularity": 12500
  },
  {
    "id": "art-002",
    "title": "Sustainable Energy Trends 2026",
    "content": "Solar and wind power costs have dropped 40% in the past year. Governments worldwide commit to net-zero goals by 2050.",
    "category": "Environment",
    "tags": ["RenewableEnergy", "ClimateChange", "Sustainability"],
    "relevanceScore": 0.82,
    "createdDate": "2025-03-10",
    "lastUpdated": "2025-12-28",
    "popularity": 9800
  },
  {
    "id": "art-003",
    "title": "Quantum Computing Breakthroughs",
    "content": "IBM announces 1000+ qubit processor. Practical applications in cryptography and drug discovery now viable within 5 years.",
    "category": "Technology",
    "tags": ["QuantumComputing", "IBM", "FutureTech"],
    "relevanceScore": 0.91,
    "createdDate": "2025-06-05",
    "lastUpdated": "2025-12-15",
    "popularity": 21500
  },
  {
    "id": "art-004",
    "title": "Remote Work Productivity Study",
    "content": "Harvard Business Review analysis shows hybrid models boost output 15% over full office. Key factors: flexible hours, better tools.",
    "category": "Business",
    "tags": ["RemoteWork", "Productivity", "HybridWork"],
    "relevanceScore": 0.78,
    "createdDate": "2025-09-22",
    "lastUpdated": "2025-12-22",
    "popularity": 6700
  },
  {
    "id": "art-005",
    "title": "Electric Vehicle Market Surge",
    "content": "Tesla Model Y becomes world's best-selling car. Battery prices fall to $80/kWh enabling affordable mass-market EVs.",
    "category": "Automotive",
    "tags": ["EV", "Tesla", "BatteryTech", "Mobility"],
    "relevanceScore": 0.88,
    "createdDate": "2025-11-01",
    "lastUpdated": "2025-12-29",
    "popularity": 34200
  }
];
[
  {
    id: 'a1',
    title: 'Getting Started with Our Knowledge Base',
    content: 'Learn how to search, filter, and navigate articles quickly.',
    category: 'Getting Started',
    tags: ['beginner', 'knowledgebase'],
    relevanceScore: 0.92,
    createdDate: '2024-11-01',
    lastUpdated: '2024-11-01',
    popularity: 1500,
  },
  {
    id: 'a2',
    title: 'Advanced Search Techniques',
    content: 'Use filters, boolean operators, and wildcards to refine results.',
    category: 'Guides',
    tags: ['advanced', 'search'],
    relevanceScore: 0.81,
    createdDate: '2025-02-10',
    lastUpdated: '2025-05-17',
    popularity: 980,
  },
  // Add more articles with varied dates, categories, relevance, popularity
  // Ensure date is ISO-like: 'YYYY-MM-DD'
];