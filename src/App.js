import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common-components/header';
import Header2 from './components/common-components/header2';
import Homepage from './components/homepage-component/homepage';
import Footer from './components/common-components/footer-new';
import './App.css';
import EssentialOil from './components/products-services/essentialOil';
import Standardized from './components/products-services/standardized-herbal-extracts';
import Cosmoceutical from './components/products-services/cosmoceutical-herbal-products';
import Phytochemical from './components/products-services/phytochemical';
import Oleoresines from './components/products-services/oleoresines';
import ContractManufacturing from './components/products-services/contract-manufacturing';
import AboutUs from './components/common-components/about-us';
import Infrastructure from './components/common-components/buisness-devlopement';
import NewsAndEventsComponents from './components/common-components/about-news-and-events';
import ProductDevelopement from './components/common-components/project-2';
import ProjectManagement from './components/common-components/project-3';
import Akba from './components/products-services/ppakba';
import Ginseng from './components/products-services/ppginseng';
import Curcumin95 from './components/products-services/ppcurcumin95';
import Curcumin30 from './components/products-services/ppcurcumin30';
import Gymnema from './components/products-services/gymnemasylvestre';
import SprayDriedFruitsandVegetablePowders from './components/products-services/spray-dried-fruits-and-vegetable-powders';
import SummitPopup from './components/common-components/SummitPopup';
import Careers from './components/common-components/careers';
import Certifications from './components/common-components/certifications';
import Brochure from './components/common-components/Brochure';
import BrochureQR from './components/common-components/BrochureQR';

/* Routes that render without the global header / footer */
const FULLSCREEN_ROUTES = ['/brochure', '/brochure-qr'];

function AppLayout() {
  const { pathname } = useLocation();
  const isFullscreen = FULLSCREEN_ROUTES.includes(pathname);

  return (
    <div className="App">
      {!isFullscreen && <SummitPopup />}
      {!isFullscreen && <Header />}
      {!isFullscreen && <Header2 />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/essential-oil" element={<EssentialOil />} />
        <Route path="/standardized-herbal-extracts" element={<Standardized />} />
        <Route path="/cosmoceutical-herbal-products" element={<Cosmoceutical />} />
        <Route path="/phytochemical" element={<Phytochemical />} />
        <Route path="/oleoresines" element={<Oleoresines />} />
        <Route path="/spray-dried-fruits-and-vegetable-powders" element={<SprayDriedFruitsandVegetablePowders />} />
        <Route path="/contact-form" element={<ContractManufacturing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/events-news" element={<NewsAndEventsComponents />} />
        <Route path="/product-developement" element={<ProductDevelopement />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/akba" element={<Akba />} />
        <Route path="/ginseng" element={<Ginseng />} />
        <Route path="/curcumin95" element={<Curcumin95 />} />
        <Route path="/curcumin30" element={<Curcumin30 />} />
        <Route path="/gymnema" element={<Gymnema />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/brochure-qr" element={<BrochureQR />} />
      </Routes>
      {!isFullscreen && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;