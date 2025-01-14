import nlp from 'compromise';

export const processQuestion = (question: string) => {
  const doc = nlp(question);
  
  // Extract key entities and actions
  const topics = doc.topics().json();
  const verbs = doc.verbs().json();
  const nouns = doc.nouns().json();
  
  // Simple text similarity using word overlap
  const words = new Set(question.toLowerCase().split(/\W+/));
  
  return {
    topics,
    verbs,
    nouns,
    words
  };
};

export const findRelevantContent = (question: string, content: string) => {
  const questionWords = new Set(question.toLowerCase().split(/\W+/));
  const contentWords = new Set(content.toLowerCase().split(/\W+/));
  
  // Calculate word overlap
  const intersection = new Set([...questionWords].filter(x => contentWords.has(x)));
  const similarity = intersection.size / Math.sqrt(questionWords.size * contentWords.size);
  
  return {
    relevance: similarity,
    content
  };
};