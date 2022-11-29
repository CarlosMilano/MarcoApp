import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./styles.css"
import AgregarObras from "./AgregarObras";
import ObrasMostradas from "./ObrasRAMostradas";
import Card from "../Components/CardObra";

function ObrasRA() {
  const navigate = useNavigate();

  const navAgregarObra = () => {
    navigate('/AgregarObras');
  }

  const navMostrados = () => {
    navigate('/ObrasMostradas');
  }

  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button className="no-seleccionado" onClick={navMostrados}>Obras Mostradas</button>
        <button className="seleccionado">Obras Guardadas</button>
      </div>
      <div className="boton">
        <button className="botonAgregar" onClick={navAgregarObra}>
          Agregar Obras
        </button>
      </div>

      <Card />

      <Routes>
        <Route path="/AgregarObras" element={<AgregarObras />} />
        <Route path="/ObrasMostradas" element={<ObrasMostradas />} />
      </Routes>

    </div>
  )

}

export default ObrasRA;
