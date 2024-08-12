import { useEffect } from 'react';
import * as React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Accueil from './components/pages/Accueil/Accueil.jsx';
import Services from './components/pages/Services/Services.jsx';
import A_propos from './components/pages/A_propos/A_propos.jsx';
import Test from './components/pages/Test/Test.jsx';
import TestDev from './components/pages/Test/allTest/testDev/TestDev.jsx';
import TestTM from './components/pages/Test/allTest/testTM/TestTM.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import EditeurDeCode from './components/pages/Test/allTest/testDev/Code-editor.jsx';

import MembresKontiki from './components/pages/A_propos/membres/MembresKontiki.jsx';

import './App.scss';
// import axios from 'axios';



function App() {

  // const [data, setData] = React.useState([]); 

  // useEffect(() => {
  //   axios.get ('http://localhost:8000/ api/myendpoint/')
  //   .then(response => {
  //   setData(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error featching data:', error);
  //   });
  // }, []);

  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/accueil' element={<Accueil />} />
        <Route path='/services' element={<Services />} />
        <Route path='/test' element={<Test />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/apropos' element={<A_propos />} />
        <Route path='/codeEditor' element={<EditeurDeCode />} />

        {/* TESTES */}
        <Route path='testDev' element={<TestDev />} />
        <Route path='testTM' element={<TestTM />} />

        {/* A PROPOS  */}
        <Route path='membresKontiki' element={<MembresKontiki />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
