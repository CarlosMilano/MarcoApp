import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {Link } from "react-router-dom";
import "./styles.css"


function Filtros() {
  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button>
          <Link to="/AgregarFiltros">
              Agregar Filtros
          </Link>
        </button>
      </div>
    </div>
  )

}

export default Filtros;
