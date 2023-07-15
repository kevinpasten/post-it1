export const InputDatos = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-8 d-flex">
                <input className="mx-2 form-control" type="text" name="title" id="title" placeholder="Titulo de la nota"/>
                <input className="mx-2 form-control" type="text" name="description" id="description" placeholder="Ingresar descripción"/>
                <div className="btn-group align-items-center">
                    <input className="mx-2 align-center form-check" type="checkbox" name="importante" id="importante" />
                    <label htmlFor="importante" className=" form-check-label">Importante!</label>
                    <button className="btn btn-dark mx-2">Agregar</button>
                </div>
            </div>
        </div>
    )
}