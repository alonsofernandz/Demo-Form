import perfil from "../assets/perfil.jpg";
const MiComponente = () => {
  return (
    // <div className="container-fluid border rounded">
    //   <div className="row p-4">
    //     <div className="col p-4">
    //       <div className="form-group">
    //         <label htmlFor="tipoDocumento">Tipo de documento</label>
    //         <input
    //           type="text"
    //           className="form-control p-2"
    //           id="tipoDocumento"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="nombres">Nombres</label>
    //         <input type="text" className="form-control p-2" id="nombres" />
    //       </div>
    //     </div>
    //     <div className="col p-4">
    //       <div className="form-group">
    //         <label htmlFor="paisEmision">País de emisión</label>
    //         <input type="text" className="form-control p-2" id="paisEmision" />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="apellidoPaterno">Apellido paterno</label>
    //         <input
    //           type="text"
    //           className="form-control p-2"
    //           id="apellidoPaterno"
    //         />
    //       </div>
    //     </div>
    //     <div className="col p-4">
    //       <div className="form-group">
    //         <label htmlFor="numeroDocumento">Número de documento</label>
    //         <input
    //           type="text"
    //           className="form-control p-2"
    //           id="numeroDocumento"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="apellidoMaterno">Apellido materno</label>
    //         <input
    //           type="text"
    //           className="form-control p-2"
    //           id="apellidoMaterno"
    //         />
    //       </div>
    //     </div>
    //     <div className="col p-4">
    //       <div className="form-group">
    //         <div className="border rounded">
    //           <img src={perfil} alt="Imagen" className="img-fluid img-thumbnail" />
    //         </div>
    //       </div>
    //       <button type="button" className="btn btn-primary">
    //         Guardar empleado
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid border rounded">
  <div className="row p-4">
    <div className="col-md-3 p-4">
      <div className="form-group">
        <label htmlFor="tipoDocumento">Tipo de documento</label>
        <input
          type="text"
          className="form-control p-2"
          id="tipoDocumento"
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombres">Nombres</label>
        <input type="text" className="form-control p-2" id="nombres" />
      </div>
    </div>
    <div className="col-md-3 p-4">
      <div className="form-group">
        <label htmlFor="paisEmision">País de emisión</label>
        <input type="text" className="form-control p-2" id="paisEmision" />
      </div>
      <div className="form-group">
        <label htmlFor="apellidoPaterno">Apellido paterno</label>
        <input
          type="text"
          className="form-control p-2"
          id="apellidoPaterno"
        />
      </div>
    </div>
    <div className="col-md-3 p-4">
      <div className="form-group">
        <label htmlFor="numeroDocumento">Número de documento</label>
        <input
          type="text"
          className="form-control p-2"
          id="numeroDocumento"
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellidoMaterno">Apellido materno</label>
        <input
          type="text"
          className="form-control p-2"
          id="apellidoMaterno"
        />
      </div>
    </div>
    <div className="col-md-3 p-4">
      <div className="form-group">
        <div className=" rounded">
          <img src={perfil} alt="Imagen" className="img-fluid img-thumbnail" style={{ maxWidth: "100px" }} />
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        Guardar empleado
      </button>
    </div>
  </div>
</div>

  );
};

<<<<<<< HEAD
export default MiComponente;
=======
export default MiComponente;
>>>>>>> 51fd2e074d9eb1dfd17265382499f284ad01b15c
