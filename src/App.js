import "./App.css";
import Login from "./Pages/Login.js";
import ObrasRAMostradas from "./Pages/ObrasRAMostradas.js";
import ObrasRAGuardadas from "./Pages/ObrasRAGuardadas.js";
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
          <Route path="/" element={<Login />} />
          <Route path="/ObrasMostradas" element={<ObrasRAMostradas />} />
          <Route path="/ObrasGuardadas" element={<ObrasRAGuardadas />} />
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
