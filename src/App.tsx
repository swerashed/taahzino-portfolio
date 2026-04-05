/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import BoldVariation from './variations/BoldVariation';
import QuotePage from './pages/QuotePage';

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
      <div className="min-h-screen bg-black text-white font-sans">
        <Routes>
          <Route path="/" element={<BoldVariation />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
