import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Accueil from './components/pages/Accueil/Accueil.jsx';
import Services from './components/pages/Services/Services.jsx';
import A_propos from './components/pages/A_propos/A_propos.jsx';
import Test from './components/pages/Test/Test.jsx';
import Contact from './components/pages/Contact/Contact.jsx';


function App() {
  return (
    <>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Accueil/>}  />
        <Route path='/accueil' element={<Accueil/>}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='/test'  element={<Test/>}  />
        <Route path='/Contact' element={<Contact/>}  />
        <Route path='/apropos' element={<A_propos/>}  />
      </Routes>

    </>
  )
}

export default App
