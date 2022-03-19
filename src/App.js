import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
