import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
