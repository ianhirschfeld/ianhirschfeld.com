import { Navigate, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NowPage from './pages/NowPage';
import PostPage from './pages/PostPage';
import ProjectsPage from './pages/ProjectsPage';
import WritingPage from './pages/WritingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/writing" element={<WritingPage />} />
      <Route path="/posts" element={<Navigate to="/writing" replace />} />
      <Route path="/posts/:slug" element={<PostPage />} />
      <Route path="/now" element={<NowPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
