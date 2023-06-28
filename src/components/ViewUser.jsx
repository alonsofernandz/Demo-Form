import user_data from '../data/profile.json';
import { MdAlternateEmail, MdPerson2, MdLocationPin, MdLocalPhone } from "react-icons/md";

export const ViewUser = () => {
    console.log(user_data);
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver perfil
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog" style={{ maxWidth: '650px' }}>
                    <div className="modal-content" style={{ backgroundColor: '#F1F1F1' }}>
                        <div className="modal-header">
                            <h1 className="modal-title">Perfil de Empleado</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row border border-secondary rounded p-3">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src={user_data.foto} alt="Foto de perfil" />
                                        <h5 className='text-center'>{user_data.documento.dni}</h5>
                                    </div>
                                </div>
                                <div className="col-8 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h3 className='mr-3'>{user_data.nombre}</h3>
                                        <h3 className='mr-3'>{user_data.nacionalidad}</h3>
                                        <button className='btn btn-secondary'>Editar</button>
                                    </div>
                                    <h5><MdPerson2 /> {user_data.cargo}</h5>
                                    <h5><MdLocationPin /> {user_data.datos_contacto.residencia}</h5>
                                    <h5><MdAlternateEmail /> {user_data.datos_contacto.email}</h5>
                                    <h5><MdLocalPhone /> {user_data.datos_contacto.telefono}</h5>
                                </div>
                            </div>

                            <div className="row">
                                <h1>Navbar</h1>
                            </div>

                            <div className="row">
                                <div className="col-7 col-sm-6">
                                    <h5>Documentos de Identidad</h5>
                                    <div className="card p-2">
                                        <div className="container">
                                            <p className="mb-0">Tipo de Documento</p>
                                            <h5 className="mt-0">{user_data.documento.tipo_doc}</h5>

                                            <p className="mb-0">Numero de Documento</p>
                                            <h5 className="mt-0">{user_data.documento.dni}</h5>

                                            <p className="mb-0">Pais de emision</p>
                                            <h5 className="mt-0">{user_data.documento.pais_emision}</h5>
                                        </div>
                                    </div>
                                    <h5 className='mt-3'>Documentos de Contacto</h5>
                                    <div className="card p-2 ">
                                        <div className="container">
                                            <p className="mb-0">Telefono</p>
                                            <h5 className="mt-0">{user_data.datos_contacto.telefono}</h5>

                                            <p className="mb-0">Celular</p>
                                            <h5 className="mt-0">{user_data.datos_contacto.telefono}</h5>

                                            <p className="mb-0">Direccion</p>
                                            <h5 className="mt-0">{user_data.datos_contacto.direccion}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 col-sm-6">
                                    <h5> Otros</h5>
                                    <div className="card p-2">
                                        <div className="container">
                                            <p className="mb-0">Sexo</p>
                                            <h5 className="mt-0">Masculino</h5>

                                            <p className="mb-0">Estado Civil</p>
                                            <h5 className="mt-0">Soltero</h5>

                                            <p className="mb-0">Grupo Sanguineo</p>
                                            <h5 className="mt-0">O+</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}