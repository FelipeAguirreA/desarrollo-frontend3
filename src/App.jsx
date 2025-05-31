// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';
import Sections from './components/Sections';
import Footer from './components/Footer'; 
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Cambia true por false

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const products = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1675720348897-f942c3f15013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuYXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Lana Natural',
      description: 'Lana 100% natural teñida a mano.'
    },
    {
      image: 'https://cdnx.jumpseller.com/telar-lanas/image/16709763/thumb/220/220?1631470482',
      title: 'Vellón',
      description: 'Ideal para fieltro y manualidades.'
    }
  ];

  const carouselImages = [];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {/* Botón para alternar modo noche/día */}
        <IconButton
          sx={{ position: 'fixed', top: 16, right: 16, zIndex: 2000 }}
          onClick={() => setDarkMode(!darkMode)}
          color="inherit"
        >
          {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Header />
        <div id="inicio" className="section">
          <ImageCarousel images={carouselImages} />
          <div className="services-container">
            {products.map((p, i) => (
              <ServiceCard key={i} {...p} />
            ))}
          </div>
        </div>

        <div id="quienes-somos" className="section">
          <Sections />
        </div>

        <div id="productos" className="section">
        </div>

        <div id="contacto" className="section">
          <ContactForm />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

