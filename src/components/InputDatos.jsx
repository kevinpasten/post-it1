import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const InputDatos = ({ agregarNota }) => {
  const [error, setError] = React.useState("");
  const importanteRef = useRef(false);
  const tituloRef = useRef("");
  const descripcionRef = useRef("");

  const addNota = () => {
    const titulo = tituloRef.current.value;
    const descripcion = descripcionRef.current.value;
    const importante = importanteRef.current.checked;

    if (!descripcion) {
      setError("No puede crear una nota sin descripción");
      return;
    }

    const nuevaNota = {
      id: uuidv4(),
      titulo,
      descripcion,
      importante,
    };
    agregarNota(nuevaNota);
    tituloRef.current.value = "";
    descripcionRef.current.value = "";
    importanteRef.current.checked = false;
    setError("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-8 d-flex">
        <input
          className="mx-2 form-control"
          type="text"
          ref={tituloRef}
          placeholder="Titulo de la nota"
        />
        <input
          className="mx-2 form-control"
          type="text"
          ref={descripcionRef}
          placeholder="Ingresar descripción"
        />
        <div className="btn-group align-items-center">
          <input
            className="mx-2 align-center form-check"
            type="checkbox"
            name="importante"
            id="importante"
            ref={importanteRef}
          />
          <label htmlFor="importante" className="form-check-label">
            Importante!
          </label>
          <button className="btn btn-dark mx-2" onClick={addNota}>
            Agregar
          </button>
        </div>
      </div>
      {error && (
        <label
          className="w-50 text-center mt-4 mb-0 alert alert-danger"
          role="alert"
        >
          {error}
        </label>
      )}
    </div>
  );
};
