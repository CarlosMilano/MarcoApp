import "./App.css";
import AgregarObras from "./Pages/AgregarObras.js";
import ObrasRA from "./Pages/ObrasRA.js";
import Filtros from "./Pages/Filtros.js";
import AgregarFiltros from "./Pages/AgregarFiltros.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/AgregarObras" element={<AgregarObras />} />
          <Route path="/ObrasRA" element={<ObrasRA />} />
          <Route path="/Filtros" element={<Filtros />} />
          <Route path="/AgregarFiltros" element={<AgregarFiltros />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
