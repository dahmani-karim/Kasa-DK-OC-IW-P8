import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Details from './pages/Details';

const basename = import.meta.env.MODE === "production" ? "/Kasa-DK-OC-IW-P8" : "";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
)