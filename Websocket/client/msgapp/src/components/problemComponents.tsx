// App.jsx or your main component
import  { useState } from 'react';

const probelmComponent = () => {
  const [code, setCode] = useState(`function solveProblem(input) {\n  // Your code here\n  return input;\n}`);
  const [activeTab, setActiveTab] = useState('description');

  // sample problem data
  const problem = {
    title: "Two Sum",
    difficulty: "Easy",
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

  const handleRunCode = () => {
    // add code execution logic here
    console.log("Running code:", code);
  };

  const handleSubmit = () => {
    // add submission logic here
    console.log("Submitting code:", code);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* header-section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">CodePlatform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* main content section */}
      <div className="flex flex-1 overflow-hidden">
        {/* problem section */}
        <div className="flex-1 flex flex-col overflow-hidden border-r border-gray-200 bg-white">
          {/* problem header */}
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
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                  Like
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                  Dislike
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                  Star
                </button>
              </div>
            </div>
          </div>

          {/* problem tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'solutions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('solutions')}
              >
                Solutions
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'discussions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('discussions')}
              >
                Discussions
              </button>
            </nav>
          </div>

          {/* problem content */}
          <div className="flex-1 overflow-y-auto p-6">
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
                  <div>
                    <strong>Explanation:</strong> 
                    <span className="ml-2 text-gray-600">{example.explanation}</span>
                  </div>
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

        {/* code editor section */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* editor header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Reset
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* code editor */}
          <div className="flex-1 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full font-mono text-sm p-4 resize-none border-none focus:outline-none"
              spellCheck="false"
            />
          </div>

          {/* console/output */}
          <div className="border-t border-gray-200">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <h4 className="text-sm font-medium text-gray-900">Console</h4>
            </div>
            <div className="p-4 h-32 overflow-y-auto">
              <div className="text-sm text-gray-600">
                {/* console output will appear here */}
                Run your code to see output here...
              </div>
            </div>
          </div>

          {/* action buttons */}
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
              <div className="text-sm text-gray-500">
                {/* add timer or other status info */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default probelmComponent;