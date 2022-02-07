import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutWithNavbar from "./components/LayoutWithNavbar";
import Home from "./components/Home.jsx";
import RoyalFamily from "./components/RoyalFamily.jsx";
import RoyalAssets from "./components/RoyalAssets.jsx";
import JavelinWorldCup from "./components/JavelinWorldCup.jsx";
import Contact from "./components/Contact.jsx";

import './App.css'

function App() {

  return (
   <Router>
        <Routes>
          <Route exact path="" element={<LayoutWithNavbar />} >
          <Route path="/home" element={<Home />} />
          <Route path="/royal-family" element={<RoyalFamily />} />
          <Route path="/royal-assets" element={<RoyalAssets />} />
          <Route path="/javelin-world-cup" element={<JavelinWorldCup />} />
          <Route path="/contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
