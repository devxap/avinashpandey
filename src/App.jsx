import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './providers/theme';
import GlobalStyle from './Globalstyle';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import './App.css'
import ParticlesComponent from './components/ParticlesComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          
          <ParticlesComponent id="particles" />
          <Navbar toggleTheme={toggleTheme} />

          <GlobalStyle />
          
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<About />} />
          </Routes>


        </ThemeProvider>
      </Router>
    </>

  );
};

export default App;
