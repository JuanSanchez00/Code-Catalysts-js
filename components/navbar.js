import Image from 'next/image';
import { useEffect } from 'react';
import { getCamisetasPorEquipo, getCamisetasPorLiga, getEquiposPorLiga, getMisPedidos } from "../data/api";

export default function NavBar({
  setVisibilidadFiltrarLiga,
  setVisibilidadFiltrarEquipo,
  setVisibilidadCarrusel,
  setVisibilidadCamisetas,
  setCamisetasVisibles,
  setVisibilidadTitulo,
  setTitulo,
  setVisibilidadCamisetaActual,
  setVisibilidadCarrito,
  todasLasCamisetas,
  visibilidadAtrasLiga,
  visibilidadAtrasEquipo,
  visibilidadIniciarSesion,
  visibilidadCerrarSesion,
  setVisibilidadAtrasLiga,
  setVisibilidadAtrasEquipo,
  setEquiposVisibles,
  tituloLiga,
  tituloEquipo,
  idLiga,
  idEquipo,
  setVisibilidadLogin,
  setVisibilidadRegister,
  setVisibilidadCerrarSesion,
  setVisibilidadIniciarSesion,
  setVisibilidadPedidos,
  visibilidadPedidos,
  setPedidos
}) {
 useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (typeof usuarioGuardado === 'string') {
      setVisibilidadIniciarSesion("none");
      setVisibilidadCerrarSesion("block");
    }
    else {
      setVisibilidadIniciarSesion("block");
      setVisibilidadCerrarSesion("none");
    }
  }, []);

  async function handleClickCamisetas(){
    setCamisetasVisibles(todasLasCamisetas);
    setVisibilidadFiltrarLiga("block");
    setVisibilidadFiltrarEquipo("none");
    setVisibilidadCarrusel("none"); 
    setVisibilidadCamisetas("block");
    setVisibilidadTitulo("block");
    setVisibilidadCamisetaActual("none");
    setTitulo("Todas las camisetas");
    setVisibilidadCarrito("block");
    setVisibilidadAtrasLiga("none");
    setVisibilidadAtrasEquipo("none");
    setVisibilidadLogin("none");
    setVisibilidadRegister("none");
    setVisibilidadPedidos("none");
  };

  async function handleClickLiga(){
    setEquiposVisibles(await getEquiposPorLiga(idLiga));
    setCamisetasVisibles(await getCamisetasPorLiga(idLiga));
    setTitulo("Camisetas de " + tituloLiga);
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("block");
    setVisibilidadCarrusel("none"); 
    setVisibilidadCamisetas("block");
    setVisibilidadTitulo("block");
    setVisibilidadCamisetaActual("none")
    setVisibilidadCarrito("block");
    setVisibilidadAtrasLiga("none");
    setVisibilidadAtrasEquipo("none");
  };

  async function handleClickEquipo(){
    setCamisetasVisibles(await getCamisetasPorEquipo(idEquipo));
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("none");
    setVisibilidadCarrusel("none"); 
    setVisibilidadCamisetas("block");
    setVisibilidadTitulo("block");
    setVisibilidadCamisetaActual("none")
    setTitulo("Camisetas de " + tituloEquipo);
    setVisibilidadCarrito("block");
    setVisibilidadAtrasLiga("block");
    setVisibilidadAtrasEquipo("none");
  };

  const handleClickIniciarSesion = () => {
    setVisibilidadLogin("block");
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("none")
    setVisibilidadCarrusel("none"); 
    setVisibilidadCamisetas("none");
    setVisibilidadCamisetaActual("none");
    setVisibilidadCarrito("block");
    setVisibilidadAtrasLiga("none");
    setVisibilidadAtrasEquipo("none");
    setVisibilidadTitulo("block");
    setTitulo("Iniciar sesión");
    setVisibilidadRegister("none");
  };

  const handleClickCerrarSesion = () => {
    alert("Se ha cerrado la sesión de "+localStorage.getItem("usuario"));
    setPedidos("");
    localStorage.removeItem('usuario');
    setVisibilidadCerrarSesion("none");
    setVisibilidadIniciarSesion("block");
    if (visibilidadPedidos == "block") {
      setCamisetasVisibles(todasLasCamisetas);
      setVisibilidadFiltrarLiga("block");
      setVisibilidadFiltrarEquipo("none");
      setVisibilidadCarrusel("none"); 
      setVisibilidadCamisetas("block");
      setVisibilidadTitulo("block");
      setVisibilidadCamisetaActual("none");
      setTitulo("Todas las camisetas");
      setVisibilidadCarrito("block");
      setVisibilidadAtrasLiga("none");
      setVisibilidadAtrasEquipo("none");
      setVisibilidadLogin("none");
      setVisibilidadRegister("none");
      setVisibilidadPedidos("none");
    }
  };

  const handleClickInicio = () => {
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("none")
    setVisibilidadCarrusel("block"); 
    setVisibilidadCamisetas("none");
    setVisibilidadTitulo("none");
    setVisibilidadCamisetaActual("none");
    setVisibilidadCarrito("none");
    setVisibilidadAtrasLiga("none");
    setVisibilidadAtrasEquipo("none");
    setVisibilidadLogin("none");
    setVisibilidadRegister("none");
    setVisibilidadPedidos("none");
  };

  async function handleClickMisPedidos(){
    setPedidos(await getMisPedidos(localStorage.getItem("usuario")));
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("none")
    setVisibilidadCarrusel("none"); 
    setVisibilidadCamisetas("none");
    setVisibilidadTitulo("block");
    setVisibilidadCamisetaActual("none");
    setVisibilidadCarrito("block");
    setVisibilidadAtrasLiga("none");
    setVisibilidadAtrasEquipo("none");
    setVisibilidadLogin("none");
    setVisibilidadRegister("none");
    setVisibilidadPedidos("block");
    setTitulo("Mis pedidos");
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
      <a class="navbar-brand" id="tituloNav" onClick={handleClickInicio}>La Camiseta No Se Mancha </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" onClick={handleClickCamisetas}> Camisetas </a>
          </li>
          <li class="nav-item active" style={{ display: visibilidadAtrasLiga }}>
            <a class="nav-link" onClick={handleClickLiga}> {tituloLiga} </a>
          </li>
          <li class="nav-item active" style={{ display: visibilidadAtrasEquipo }}>
            <a class="nav-link" onClick={handleClickEquipo}> {tituloEquipo} </a>
          </li>
          <li class="nav-item active" style={{ display: visibilidadIniciarSesion }}>
            <a class="nav-link" onClick={handleClickIniciarSesion}> Iniciar sesión </a>
          </li>
          <li class="nav-item active" style={{ display: visibilidadCerrarSesion }}>
            <a class="nav-link" onClick={handleClickMisPedidos}> Mis pedidos </a>
          </li>
          <li class="nav-item active" style={{ display: visibilidadCerrarSesion }}>
            <a class="nav-link" onClick={handleClickCerrarSesion}> Cerrar Sesión </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}