import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {Link } from "react-router-dom";
import "./styles.css"

function ObrasRA() {
  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button>Obras Mostradas</button>
        <button>Obras Guardadas</button>
      </div>
      <div className="boton">
        <button>
          <Link to="/AgregarObras">
              Agregar Obra
          </Link>
        </button>
      </div>
    </div>
  )

}

export default ObrasRA;
