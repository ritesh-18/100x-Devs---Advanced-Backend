// components/CodeEditor.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Problem } from '../types/problem';

const CodeEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState<string>(`function solveProblem(input) {\n  // Your code here\n  return input;\n}`);
  const [language, setLanguage] = useState<string>('JavaScript');

  // Sample problem data
  const problem: Problem = {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45%",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]"
      }
    ],
    constraints: []
  };

  const handleRunCode = (): void => {
    console.log("Running code:", code);
    // Add code execution logic here
  };

  const handleSubmit = (): void => {
    console.log("Submitting code:", code);
    // Add submission logic here
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value);
    // Reset code based on language selection
    setCode(getDefaultCode(e.target.value));
  };

  const getDefaultCode = (lang: string): string => {
    switch (lang) {
      case 'JavaScript':
        return `function solveProblem(input) {\n  // Your code here\n  return input;\n}`;
      case 'Python':
        return `def solve_problem(input):\n    # Your code here\n    return input`;
      case 'Java':
        return `public class Solution {\n    public Object solveProblem(Object input) {\n        // Your code here\n        return input;\n    }\n}`;
      case 'C++':
        return `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Your code here\n    return 0;\n}`;
      default:
        return `function solveProblem(input) {\n  // Your code here\n  return input;\n}`;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 pt-16">
      {/* Problem Section */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-gray-200 bg-white">
        {/* Problem Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{problem.title}</h2>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
            </div>
            <Link
              to={`/problem/${problem.id}`}
              className="text-blue-600 hover:text-blue-900"
            >
              View Problem Details
            </Link>
          </div>
        </div>

        {/* Problem Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose max-w-none">
            <p className="whitespace-pre-line text-gray-700 mb-6">{problem.description}</p>
            
            <h3 className="text-lg font-medium text-gray-900 mb-4">Example:</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-2">
                <strong>Input:</strong> 
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">{problem.examples[0].input}</code>
              </div>
              <div>
                <strong>Output:</strong> 
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">{problem.examples[0].output}</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Editor Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <select 
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
            </select>
            <div className="flex space-x-2">
              <button 
                onClick={() => setCode(getDefaultCode(language))}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 overflow-hidden">
          <textarea
            value={code}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
            className="w-full h-full font-mono text-sm p-4 resize-none border-none focus:outline-none"
            spellCheck="false"
          />
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <button
                onClick={handleRunCode}
                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
              >
                Run
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;