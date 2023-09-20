 import React from 'react';
import Footer from './homepage/footer';
import Router from './Routing/router';
import { ToastContainer } from 'react-toastify';
import CustomNavbar from './homepage/navbar';

function App() {
  return (
    <div className="App">
    <CustomNavbar/>
    <Router/>
    {/*<Footer/>*/}
    </div>
  
  )
}

export default App