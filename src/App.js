import "./App.css";
// import React, { useEffect } from "react";
import AgregarObrasViejo from "./Pages/AgregarObrasViejo.js";
import ObrasRA from "./Pages/ObrasRA.js";
import Filtros from "./Pages/Filtros.js";
import AgregarFiltros from "./Pages/AgregarFiltros.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreditCard from "./Components/creditCard";
import AgregarObras from "./Components/AgregarObras"

function App() {
  return (
    <div>
    {/* <CreditCard /> */}
     <Router>
        <Routes>
          <Route path="/AgregarObras" element={<AgregarObras />} />
          <Route path="/ObrasRA" element={<ObrasRA />} />
          <Route path="/Filtros" element={<Filtros />} />
          <Route path="/AgregarFiltros" element={<AgregarFiltros />} />
          <Route path="/CreditCard" element={<CreditCard />} />
          <Route path="/viejo" element={<AgregarObrasViejo />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
