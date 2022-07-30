import React from 'react';
import { About, Collection, Create, Discover, Home, Top } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Top />
    <Collection />
    <Create />
    <Discover />
    <Footer />
  </div>
)

export default App;