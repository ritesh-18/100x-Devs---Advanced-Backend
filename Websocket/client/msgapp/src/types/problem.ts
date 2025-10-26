// types/problem.ts
export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: string;
  description: string;
  examples: Example[];
  constraints: string[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}