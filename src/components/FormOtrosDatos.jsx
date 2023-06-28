// Luis villavicencio dznkos


export const FormOtrosDatos = () => {
  return (
    <>

      <div className="container">

        <h2>Example Otros Datos</h2>

        <div className="col-md-12 col-lg-12 border border-2 border-secondary rounded p-4">
          <h4 className="mb-3">Otros Datos</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">

              <div className="col-md-5 mx-auto">

                <div className="row mb-3">
                  <label htmlFor="country" className="form-label">Profesion</label>
                  <select className="form-select" id="profession" required="">
                    <option value="">Seleccionar profesion</option>
                    <option>Developer BackEnd</option>
                    <option>Developer FrontEnd</option>
                    <option>Developer FullStack</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a profession.
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="country" className="form-label">Estado Civil</label>
                  <select className="form-select col-md" id="estadocivil" required="">
                    <option value="">Seleccionar...</option>
                    <option>Soltero(a)</option>
                    <option>Casado(a)</option>
                    <option>Viudo(a)</option>
                    <option>Divorciado(a)</option>
                    <option>Separado(a)</option>
                    <option>Conviviente(a)</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a state.
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="country" className="form-label">Brevete</label>
                  <select className="form-select col-md" id="estadocivil" required="">
                    <option value="">Elegir</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select option.
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="username" className="form-label">N° Brevete</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">#</span>
                    <input type="text" className="form-control" id="username" placeholder="Número de Brevete" required="" />
                    <div className="invalid-feedback">
                      Your number is required.
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-5  mx-auto">

                <div className="row mb-3">
                  <label htmlFor="country" className="form-label">Grupo Sanguíneo</label>
                  <select className="form-select col-md" id="estadocivil" required="">
                    <option value="">Seleccione grupo</option>
                    <option>O-</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select one.
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="form-group">
                    <label htmlFor="fecha" className="form-label">Fecha de Matrimonio:</label>
                    <input type="date" className="form-control" id="fecha" name="fecha" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="country" className="form-label">Fallecido</label>
                  <select className="form-select col-md" id="estadopersona" required="">
                    <option value="">Elegir</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select option.
                  </div>
                </div>

              </div>
            </div>

            <button className="btn btn btn-success btn-md" type="submit">Guardar</button>

          </form>
        </div>
      </div>
    </>
  )
}
