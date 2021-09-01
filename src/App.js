import React from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Globalstyle } from './Globalstyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/feature';
import Postres from './components/postre';
import SpecialSweet from './components/specialSweet';
import Footer from './components/footer';





function App() {
  return (
    
    <Router>
      <Globalstyle/>
      <Hero/>
      <Products heading='Choose your Favorite Pizaa'  />
      <Features/>
      <Postres/>
      <SpecialSweet/>
      <Footer/>
    </Router> 
  );
}

export default App;
