import "./App.css";
import AgregarObras from "./Pages/AgregarObras.js";
import About from "./Pages/About.js";
import ObrasRA from "./Pages/ObrasRA.js";
import Filtros from "./Pages/Filtros.js";
import AgregarFiltros from "./Pages/AgregarFiltros.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
     <Router>
        <Routes>
          <Route path="/AgregarObras" element={<AgregarObras />} />
          <Route path="/ObrasRA" element={<ObrasRA />} />
          <Route path="/about" element={<About />} />
          <Route path="/Filtros" element={<Filtros />} />
          <Route path="/AgregarFiltros" element={<AgregarFiltros />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
