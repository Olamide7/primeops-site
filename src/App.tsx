import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopNavBar } from './components/TopNavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Audit } from './pages/Audit';

const App: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

