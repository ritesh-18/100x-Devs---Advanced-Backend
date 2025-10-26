// components/ProblemDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Problem } from '../types/problem';

const ProblemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Sample problem data - in real app, fetch based on id
  const problem: Problem = {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45%",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{problem.title}</h1>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
            </div>
            <Link
              to={`/solve/${problem.id}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Solve Problem
            </Link>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="prose max-w-none">
            <p className="whitespace-pre-line text-gray-700 mb-6">{problem.description}</p>
            
            <h3 className="text-lg font-medium text-gray-900 mb-4">Examples:</h3>
            {problem.examples.map((example, index) => (
              <div key={index} className="mb-6 bg-gray-50 rounded-lg p-4">
                <div className="mb-2">
                  <strong>Input:</strong> 
                  <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">{example.input}</code>
                </div>
                <div className="mb-2">
                  <strong>Output:</strong> 
                  <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">{example.output}</code>
                </div>
                {example.explanation && (
                  <div>
                    <strong>Explanation:</strong> 
                    <span className="ml-2 text-gray-600">{example.explanation}</span>
                  </div>
                )}
              </div>
            ))}

            <h3 className="text-lg font-medium text-gray-900 mb-4">Constraints:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {problem.constraints.map((constraint, index) => (
                <li key={index} className="font-mono text-sm">{constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;