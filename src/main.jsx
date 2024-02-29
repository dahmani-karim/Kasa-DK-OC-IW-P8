import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Details from './pages/Details';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
)