 import React from 'react';

import Navbar from './homepage/navbar';
import Footer from './homepage/footer';
import Router from './Routing/router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router/>
    <Footer/>
    </div>
  
  )
}

export default App