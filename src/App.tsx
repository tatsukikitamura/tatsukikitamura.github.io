import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectMbti from './pages/ProjectMbti';
import ProjectOpendata from './pages/ProjectOpendata';
import ProjectAtcoder from './pages/ProjectAtcoder';
import ProjectYamatomo from './pages/ProjectYamatomo';
import Experience from './pages/Experience';
import Problem from './pages/Problem';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/yamatomo" element={<ProjectYamatomo />} />
        <Route path="/projects/mbti-app" element={<ProjectMbti />} />
        <Route path="/projects/opendata" element={<ProjectOpendata />} />
        <Route path="/projects/atcoder" element={<ProjectAtcoder />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
