import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import CoveragePage from '@/pages/CoveragePage';
import FloatingCallButton from '@/components/FloatingCallButton';
import { Toaster } from '@/components/ui/toaster';
import OutstationPage from './pages/OutstationPage';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';



function App() {
  return (
    <Router>
      <Helmet>
        <title>Delhi Ambulance Services - 24/7 Emergency Medical Transport</title>
        <meta name="description" content="Delhi Ambulance Services provides 24/7 emergency medical transport across Delhi NCR. ICU ambulance, ventilator ambulance, air ambulance, and more." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/coverage" element={<CoveragePage />} />
            <Route path="/Outstation" element={<OutstationPage />} />
          </Routes>
        </div>
        <Footer />
        <FloatingCallButton />
        <WhatsAppFloatingButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;