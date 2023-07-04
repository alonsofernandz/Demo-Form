//mercedes

export const FormContact = () => {
  return (
    <>
      <div className="container border rounded-5 mt-5 p-4">
        <h3 className="card-title">Datos Contacto</h3>

        <style>
          {`
            .form-control::placeholder {
              color: #999999; /* Color plomo */
          `}
        </style>

        <div className="row px-3">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Correo Personal</p>
            <div className="col-lg-8 ">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control rounded-4"
                  placeholder="Ingrese correo"
                  aria-label="Correo Personal"
                />
                {/* <span className="input-group-text bg-light border-start-0">
                  <i className="fas fa-envelope text-muted"></i>
                </span> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Doc. Cuarta Categoría</p>
            <div class="container">
              <div class="dropdown">
                <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Click on Me
                </button>
                <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Phantom</a></li>
                  <li><a class="dropdown-item" href="#">Cluster</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-8 dropdown">
              <select className="form-select form-control rounded-4 custom-select">
                <option>Elegir</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="row px-3 justify-content-center">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Correo Empresa</p>
            <div className="col-lg-8">
              <input
                type="text"
                className="form-control rounded-4"
                placeholder="Ingrese correo"
                name="email"
              />
            </div>
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Planilla</p>
            <div className="col-lg-8">
              <select className="form-select rounded-4">
                <option>Elegir</option>
                <option>Planilla</option>
                <option>Recibo por Honorarios</option>
              </select>
            </div>
          </div>
        </div>


        <div className="row px-3 ">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Celular</p>
            <div className="col-lg-8">
              <input type="text" className="form-control rounded-4" placeholder="956236489" name="email" />
            </div>
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start fw-bold">Codigo Usuario</p>
            <div className="col-lg-8">
              <input type="password" className="form-control rounded-4" placeholder="Ingrese código" name="pswd" />
            </div>
          </div>
        </div>

      </div>

    </>
  );
};
