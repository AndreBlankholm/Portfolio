import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfoilo";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
