import { useState } from "react";

export default function Register({
    setVisibilidadLogin,
    setVisibilidadRegister,
    setVisibilidadCamisetas,
    setVisibilidadFiltrarLiga,
    setTitulo,
    setVisibilidadIniciarSesion,
    setVisibilidadCerrarSesion,
    todasLasCamisetas,
    setCamisetasVisibles
}) {  
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleClickRegistrarse = () => {
        if (email == '') {
            alert("Por favor ingrese su correo electrónico.");
        }
        else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const isValidEmail = emailRegex.test(email);
            if (isValidEmail) {
                if (contraseña == '') {
                    alert("Por favor ingrese su contraseña."); 
                }
                else {
                    //hacer post al registrarse de la api
                    alert("Se ha registrado correctamente.");
                    localStorage.setItem("usuario",email);
                    setContraseña('');
                    setEmail('');
                    setVisibilidadLogin("none");
                    setVisibilidadCamisetas("block");
                    setVisibilidadFiltrarLiga("block");
                    setTitulo("Todas las camisetas");
                    setVisibilidadRegister("none");
                    setVisibilidadCerrarSesion("block");
                    setCamisetasVisibles(todasLasCamisetas);
                }
            }
            else {
                alert("Debe ingresar un correo electrónico válido.");
            }
        }
    }
    return ( 
        <form className="formulario">
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Correo electrónico</label>
                <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Constraseña</label>
                <input type="password" id="form2Example2" class="form-control" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClickRegistrarse}>Ingresar</button>
        </form>
    );
}