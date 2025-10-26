// components/ProblemsPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Problem } from '../types/problem';

const ProblemsPage: React.FC = () => {
  // Sample problems data
  const problems: Problem[] = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "45%",
      description: "Find two numbers that add up to target",
      examples: [],
      constraints: []
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      acceptance: "35%",
      description: "Add two numbers represented as linked lists",
      examples: [],
      constraints: []
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "31%",
      description: "Find the longest substring with unique characters",
      examples: [],
      constraints: []
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "29%",
      description: "Find median of two sorted arrays",
      examples: [],
      constraints: []
    }
  ];

  const getDifficultyColor = (difficulty: Problem['difficulty']): string => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Problems</h1>
        </div>
        
        {/* Problems Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acceptance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {problems.map((problem) => (
                <tr key={problem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/problem/${problem.id}`}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      {problem.title}
                    </Link>
                    <p className="text-sm text-gray-500">{problem.description}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-medium ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {problem.acceptance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/solve/${problem.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Solve
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;