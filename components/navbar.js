import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCamisetasPorEquipo, getCamisetasPorLiga, getEquiposPorLiga, getMisPedidos, logout } from "../data/api";

export default function NavBar({
  setAllProducts,
  setCountProducts,
  setTotal
}) {

  const router = useRouter();
  let usuario;
  const [visibilidadIniciarSesion, setVisibilidadIniciarSesion] = useState("block");
  const [visibilidadCerrarSesion, setVisibilidadCerrarSesion] = useState("none");

  useEffect(() => {
    usuario = localStorage.getItem('usuario');
    console.log("Usuario: "+usuario);
  }, []);

  useEffect(() => {
    usuario = localStorage.getItem('usuario');
    if (usuario != null) {
      setVisibilidadIniciarSesion("none");
      setVisibilidadCerrarSesion("block");
    }
    else {
      setVisibilidadIniciarSesion("block");
      setVisibilidadCerrarSesion("none");
    }
  }, []);

  async function handleClickCerrarSesion() {
    const email = localStorage.getItem('usuario');
    const token = localStorage.getItem('token');
    if (await logout(email,token)) {
      alert("Se ha cerrado la sesión de "+localStorage.getItem("usuario"));
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      setVisibilidadCerrarSesion("none");
      setVisibilidadIniciarSesion("block");
      setAllProducts([]);
		  setCountProducts(0);
      setTotal(0);
      router.push('/');
    }
    else {
      alert("Ocurrió un error al cerrar sesión.");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-logo">
      <Image
        src="https://i.ibb.co/7WBsHrf/Logo.png"
        width={40}
        height={40}
      />
      </div>
      <Link class="navbar-brand" id="tituloNav" href="/">La Camiseta No Se Mancha</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <Link class="nav-link" href="/camisetas">Camisetas</Link>
          </li>
          <li class="nav-item active" style={{ display: visibilidadIniciarSesion}}>
            <Link class="nav-link" href="/login">Iniciar sesión</Link>
          </li>
          <li class="nav-item active" style={{ display: visibilidadCerrarSesion}}>
            <Link class="nav-link" href="/pedidos">Mis Pedidos</Link>
          </li>
          <li class="nav-item active" style={{ display: visibilidadCerrarSesion}} onClick={handleClickCerrarSesion} >
            <a class="nav-link" >Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}