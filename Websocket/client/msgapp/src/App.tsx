// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProblemsPage from './components/ProblemsPage';
import ProblemDetail from './components/ProblemDetail';
import CodeEditor from './components/CodeEditor';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/problems" replace />} />
            <Route path="problems" element={<ProblemsPage />} />
            <Route path="problem/:id" element={<ProblemDetail />} />
            <Route path="solve/:id" element={<CodeEditor />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;