import { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import HobbyDetail from './components/HobbyDetail';
import BlogDetail from './components/BlogDetail';

import projectsData from './data/projects';
import hobbiesData from './data/hobbies';
import blogData from './data/blog';

function Home() {
  const location = useLocation();

  // Navigation.jsx sends { scrollTo: 'sectionId' } when it has to route home
  // first before it can scroll (e.g. clicking "Projects" from a detail page).
  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => String(p.id) === id && !p.draft);
  if (!project) return <Navigate to="/" replace />;
  return <ProjectDetail project={project} goBack={() => navigate('/')} />;
}

function HobbyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hobby = hobbiesData.find((h) => h.id === id);
  if (!hobby) return <Navigate to="/" replace />;
  return <HobbyDetail hobby={hobby} goBack={() => navigate('/')} />;
}

function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => String(b.id) === id && !b.draft);
  if (!blog) return <Navigate to="/" replace />;
  return <BlogDetail blog={blog} goBack={() => navigate('/')} />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/hobby/:id" element={<HobbyDetailPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
