//mercedes

export const FormContact = () => {
  return (
    <>
      <div className="container border rounded-3 mt-5 ">
        <h3 className="card-title">Datos Contacto</h3>

        <div className="row">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Correo Personal</p>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese correo"
              name="email"
            />
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Doc. Cuarta Categoria</p>
            <select className="form-select form-control">
              <option>Elegir</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Correo Empresa</p>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese correo"
              name="email"
            />
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Planilla</p>
            <select className="form-select">
              <option>Elegir</option>
              <option>Planilla</option>
              <option>Recibo por Honorarios</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Celular</p>
            <input
              type="text"
              className="form-control"
              placeholder="956236489"
              name="email"
            />
          </div>
          <div className="col-lg-6 mb-3 mt-3">
            <p className="text-start">Codigo Usuario</p>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese código"
              name="pswd"
            />
          </div>
        </div>
      </div>
    </>
  );
};
