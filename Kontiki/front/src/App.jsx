import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx"
import Test from"./components/Test/Test.jsx";
import {BrowserRouter as Router} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Test/>
      </Router>
    </div>
  )
}

export default App
