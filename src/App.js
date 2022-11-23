import "./App.css";
import AgregarObras from "./Pages/AgregarObras.js";
import About from "./Pages/About.js";
import ObrasRA from "./Pages/ObrasRA.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/AgregarObras" element={<AgregarObras />} />
          <Route path="/obrasRA" element={<ObrasRA />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
