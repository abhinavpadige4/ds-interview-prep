```typescript
import { SystemDesignTopic } from '../types';

export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'sd-1',
    title: 'ML System Design Framework',
    content: 'A structured approach to designing ML systems in production.',
    keyPoints: [
      '1. Problem Definition: Clarify requirements, success metrics, constraints',
      '2. Data Collection: Identify data sources, volume, velocity, variety',
      '3. Data Processing: ETL pipelines, feature engineering, data validation',
      '4. Model Development: Algorithm selection, training, validation',
      '5. Model Serving: Batch vs real-time, API design, versioning',
      '6. Monitoring: Data drift, concept drift, performance degradation',
      '7. Infrastructure: Scalability, fault tolerance, cost optimization',
      'Key tradeoffs: Latency vs accuracy, cost vs performance, batch vs real-time'
    ],
    tags: ['framework', 'fundamentals', 'architecture']
  },
  {
    id: 'sd-2',
    title: 'Design a Recommendation System',
    content: 'Design a recommendation system like Netflix or Amazon.',
    keyPoints: [
      'Approaches: Collaborative Filtering, Content-Based, Hybrid, Deep Learning',
      'Collaborative Filtering: User-User, Item-Item, Matrix Factorization (SVD)',
      'Content-Based: TF-IDF, embeddings, similarity metrics',
      'Deep Learning: Two-tower models, neural collaborative filtering',
      'Architecture: Candidate generation → Ranking → Re-ranking',
      'Candidate Generation: Fast, broad filtering (millions → thousands)',
      'Ranking: Precise scoring with