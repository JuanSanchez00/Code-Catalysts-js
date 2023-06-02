import React from 'react';
import Camiseta from '../components/Camiseta';
import Link from 'next/link';

const ConjuntoCamisetas = ({ camisetas,setCamisetaActual,setVisibilidadCamisetas,setVisibilidadFiltrarEquipo,setVisibilidadFiltrarLiga,setVisibilidadCamisetaActual,setTitulo}) => {
  
  async function handleClickCambiarCamiseta (camiseta){
    setVisibilidadCamisetas("none");
    setVisibilidadFiltrarEquipo("none");
    setVisibilidadFiltrarLiga("none");
    setVisibilidadCamisetaActual("block");
    setCamisetaActual(camiseta);
    setTitulo("Comprar camiseta");
  }
  if (camisetas != null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          {camisetas.map((camiseta) => (
                <a onClick={() => handleClickCambiarCamiseta(camiseta)} >
                  <Camiseta 
                    id_camiseta={camiseta.id_camiseta}
                    descripcion={camiseta.descripcion}
                    precio={camiseta.precio}
                    imagen={camiseta.imagen}
                    talles={camiseta.talles}
                  />
                </a>
          ))}
        </div>
      </div>
    );
  }
};

export default ConjuntoCamisetas;