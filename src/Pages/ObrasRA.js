import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./styles.css"
import AgregarObras from "./AgregarObras";
import Card from "../Components/CardObra";

function ObrasRA() {
  const navigate = useNavigate();

  const navAgregarObra = () => {
    navigate('/AgregarObras');
  }

  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button className="mostrados">Obras Mostradas</button>
        <button className="mostrados">Obras Guardadas</button>
      </div>
      <div className="boton">
        <button className="botonAgregar" onClick={navAgregarObra}>
          Agregar Obras
        </button>
      </div>

      <Card />

      <Routes>
        <Route path="/AgregarObras" element={<AgregarObras />} />
      </Routes>

    </div>
  )

}

export default ObrasRA;
