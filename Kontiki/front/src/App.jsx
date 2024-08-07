import * as React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Accueil from './components/pages/Accueil/Accueil.jsx';
import Services from './components/pages/Services/Services.jsx';
import A_propos from './components/pages/A_propos/A_propos.jsx';
import Test from './components/pages/Test/Test.jsx';
import TestDev from './components/pages/Test/allTest/testDev/TestDev.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import EditeurDeCode from './components/pages/Test/allTest/testDev/Code-editor.jsx';
import './App.scss';




function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/accueil' element={<Accueil />} />
        <Route path='/services' element={<Services />} />
        <Route path='/test' element={<Test />} />
        <Route path='testDev' element={<TestDev />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/apropos' element={<A_propos />} />
        <Route path='/codeEditor' element={<EditeurDeCode />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
