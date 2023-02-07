import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="nickmbk-portfolio" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="project-gallery" element={<ProjectGallery />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
