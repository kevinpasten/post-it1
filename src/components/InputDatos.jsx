import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const InputDatos = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const [importante, setImportante] = useState(false);


  const addNota = () => {
    if (!descripcion){
        setError('No puede crear una nota sin descripción');
        return;
    }

    const nuevaNota = {
      id: uuidv4(),
      titulo,
      descripcion,
      importante
    };
    agregarNota(nuevaNota);
    setTitulo('');
    setDescripcion('');
    setError('');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-8 d-flex">
        <input className="mx-2 form-control" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Titulo de la nota" />
        <input className="mx-2 form-control" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Ingresar descripción" />
        <div className="btn-group align-items-center">
          <input className="mx-2 align-center form-check" type="checkbox" name="importante" id="importante" checked={importante} onChange={(e) => setImportante(e.target.checked)} />
          <label htmlFor="importante" className="form-check-label">Importante!</label>
          <button className="btn btn-dark mx-2" onClick={addNota}>Agregar</button>
        </div>
      </div>
      {error && <label className="w-50 text-center mt-4 mb-0 alert alert-danger" role="alert">{error}</label>}
    </div>
  );
};
