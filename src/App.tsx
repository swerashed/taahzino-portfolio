/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
