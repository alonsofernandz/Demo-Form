<<<<<<< Updated upstream
//juan alonso
=======
//juan alonso

export const FormLabolData = () => {
    return (
        <>
            <div className="container form-control border border-secondary rounded-5 my-4">
                <div className="card-body">
                    <div className="row m-4">

                        {/* Seccion 1 */}
                        <h3>Datos del trabajador</h3>
                        
                            <div className="col">
                                <label className="form-label">Estado</label>
                                <div className="col mb-3">
                                    <div class="input-group w-75">
                                        <label class="input-group-text" for="inputGroupSelect01"></label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Elegir</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fecha de Ingreso:</label>
                                    <input type="date" className="form-control w-75" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Motivo de Ingreso:</label>
                                    <input type="text" className="form-control w-75" placeholder="Seleccione Motivo" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Fecha de Cese:</label>
                                    <input type="date" className="form-control w-75" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Motivo de Cese:</label>
                                    <div class="input-group mb-3 w-75">
                                        <label class="input-group-text" for="inputGroupSelect01"></label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Elige</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de Trabajador</label>
                                    <input type="text" className="form-control w-75" placeholder="Seleccione tipo" />
                                </div>
                            </div>
                        
                    </div>

                    {/* Seccion 2 */}

                    <div className="row m-4">
                        <h3>Pensión</h3>
                        <div className="col">
                            <label className="form-label">Régimen</label>
                            <input type="text" className="form-control w-75 mb-4" placeholder="Selecciona Motivo" />
                            <label className="form-label">AFP</label>
                            <input type="text" className="form-control w-75 mb-4" placeholder="Selecciona tipo" />
                        </div>
                        <div className="col"></div>

                    </div>

                    {/* Seccion 3 */}

                    <div className="row m-4">
                        <h3>Datos Organizacionales</h3>
                        <div className="col">
                            <label className="form-label">Planilla</label>
                            <div class="input-group mb-3 w-75">
                                <label class="input-group-text" for="inputGroupSelect01"></label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Elige</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="form-label">Area Laboral</label>
                                <input type="text" className="form-control w-75" placeholder="Ingrese área" />
                            </div>
                            <div>
                                <label className="form-label">Cargo</label>
                                <input type="text" className="form-control w-75" placeholder="############" />
                            </div>
                        </div>

                        <div className="col">
                            <label className="form-label">Plan EPS</label>
                            <div class="input-group mb-3 w-75">
                                <label class="input-group-text" for="inputGroupSelect01"></label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Elige</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <label className="form-label">Ex Renta 4ta</label>
                            <div class="input-group mb-3 w-75">
                                <label class="input-group-text" for="inputGroupSelect01"></label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Elige</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <label className="form-label">Grupo de Pago</label>
                            <input type="text" className="form-control w-75" placeholder="Ingresar Código" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
>>>>>>> Stashed changes
