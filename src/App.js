import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactUsPage from './pages/ContactUsPage';
import FaqPage from './pages/FaqPage';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
