import "./App.css";
import ObrasRA from "./Pages/ObrasRA.js";
import Filtros from "./Pages/Filtros.js";
import AgregarObras from "./Pages/AgregarObras.js";
import AgregarFiltros from "./Pages/AgregarFiltros.js";
import EditarObras from "./Pages/EditarObras.js";
import EditarFiltros from "./Pages/EditarFiltros.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ObrasRA />} />
          <Route path="/Filtros" element={<Filtros />} />
          <Route path="/AgregarObras" element={<AgregarObras />} />
          <Route path="/AgregarFiltros" element={<AgregarFiltros />} />
          <Route path="/EditarObras" element={<EditarObras />} />
          <Route path="/EditarFiltros" element={<EditarFiltros />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
