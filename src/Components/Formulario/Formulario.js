import './Formulario.css'
export default function Formulario(){
    return(
        <div className='form-Custom'>
            <h1>Formulario de Registro</h1>
            <form>
                <div className="mb-3">
                    <div className="row gx-5">
                        <div className="col">
                            <label for="name" className="form-label">Nombre Usuario</label>
                            <input type="text" className="form-control p-3 border bg-light"/>
                        </div>
                        <div className="col">
                        <label for="name" className="form-label">Email Usuario</label>
                            <input type="email" className="form-control p-3 border bg-light"/>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row gx-5">
                        <div className="col">
                            <label for="name" className="form-label">Contraseña</label>
                            <input type="password" className="form-control p-3 border bg-light"/>
                        </div>
                        <div className="col">
                        <label for="name" className="form-label">Repetir Contraseña</label>
                            <input type="password" className="form-control p-3 border bg-light"/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
}