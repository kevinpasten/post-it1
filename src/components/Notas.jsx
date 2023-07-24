import React, { useState } from "react";
import "./Notas.css";
import { InputDatos } from "./InputDatos";


export const Notas = () => {
  const [notas, setNotas] = useState([]);

  const AgregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  };

  const BorrarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  return (
    <div className="container">
      <InputDatos agregarNota={AgregarNota}/>
      <div className="d-flex flex-wrap">
        {notas.map((nota) => (
          <div key={nota.id} className="col col-lg-3 mt-5">
            <div
              className={`card mx-auto ${nota.importante ? "importante" : ""}`}
            >
              <div className="card-body">
                <h3 className="card-title">{nota.titulo}</h3>
                <p className="card-text">{nota.descripcion}</p>
              </div>
              <button
                className="btn btn-sm btn-borrar"
                onClick={() => BorrarNota(nota.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
