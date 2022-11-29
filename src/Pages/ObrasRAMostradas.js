import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./styles.css"
import AgregarObras from "./AgregarObras";
import ObrasGuardadas from "./ObrasRAGuardadas";
import Card from "../Components/CardObra";

function ObrasRA() {
  const navigate = useNavigate();

  const navAgregarObra = () => {
    navigate('/AgregarObras');
  }

  const navGuardados = () => {
    navigate('/ObrasGuardadas');
  }

  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button className="seleccionado">Obras Mostradas</button>
        <button className="no-seleccionado" onClick={navGuardados}>Obras Guardadas</button>
      </div>
      <div className="boton">
        <button className="botonAgregar" onClick={navAgregarObra}>
          Agregar Obras
        </button>
      </div>

      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Routes>
        <Route path="/AgregarObras" element={<AgregarObras />} />
        <Route path="/ObrasGuardadas" element={<ObrasGuardadas />} />
      </Routes>

    </div>
  )

}

export default ObrasRA;
