import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar.js";
import { Contact, Home, Learning, About } from "./Components/Pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
