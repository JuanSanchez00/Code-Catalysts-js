import Image from 'next/image';
import { useState } from "react";
import { getCamisetasPorEquipo, getCamisetasPorLiga, getEquiposPorLiga } from "../data/api";

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
  setVisibilidadAtrasLiga,
  setVisibilidadAtrasEquipo,
  setEquiposVisibles,
  tituloLiga,
  tituloEquipo,
  idLiga,
  idEquipo
}) {

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
  };

  async function handleClickLiga(){
    setVisibilidadTitulo("none");
    setVisibilidadCarrito("none");
    setVisibilidadCamisetas("none");
    setEquiposVisibles(await getEquiposPorLiga(idLiga));
    setTitulo("Camisetas de " + tituloLiga);
    setCamisetasVisibles(await getCamisetasPorLiga(idLiga));
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
      <a class="navbar-brand" onClick={handleClickInicio}>La Camiseta No Se Mancha </a>
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
        </ul>
      </div>
    </nav>
  );
}