import React from 'react';
import Camiseta from '../components/Camiseta';
import Link from 'next/link';

const ConjuntoCamisetas = ({ camisetas,setCamisetaActual,setVisibilidadTitulo,setVisibilidadCamisetas,setVisibilidadFiltrarEquipo,setVisibilidadFiltrarLiga,setVisibilidadCamisetaActual}) => {
  
  async function handleClickCambiarCamiseta (camiseta){
    setVisibilidadCamisetas("none");
    setVisibilidadTitulo("none");
    setVisibilidadFiltrarEquipo("none");
    setVisibilidadFiltrarLiga("none");
    setVisibilidadCamisetaActual("block");
    setCamisetaActual(camiseta);
  }

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
};

export default ConjuntoCamisetas;