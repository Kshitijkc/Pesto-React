// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HandymanIcon from '@mui/icons-material/Handyman';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {isDesktop} from 'react-device-detect';

const App = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (location.pathname === '/') {
      setValue(0);
    } else if (location.pathname.startsWith('/projects')) {
      setValue(1);
    } else if (location.pathname.startsWith('/skills')) {
      setValue(2);
    } else if (location.pathname.startsWith('/contact')) {
      setValue(3);
    } else {
      setValue(0);
    }
  }, [location.pathname]);
  
  return (
    <>
      <nav>
        <Tabs value={value} aria-label="icon tabs example" centered>
          <Tab icon={<HomeIcon />} iconPosition="start" label={isDesktop ? "Home" : null} aria-label="home" component={Link} to='/' />
          <Tab icon={<ApartmentIcon />} iconPosition="start" label={isDesktop ? "Projects" : null} aria-label="projects" component={Link}  to='/projects' />
          <Tab icon={<HandymanIcon />} iconPosition="start" label={isDesktop ? "Skills" : null} aria-label="skills" component={Link}  to='skills' />
          <Tab icon={<ContactPageIcon />} iconPosition="start" label={isDesktop ? "Contact" : null} aria-label="contact" component={Link}  to='contact' />
        </Tabs>
      </nav>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
