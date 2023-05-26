import React from 'react';
import Camiseta from '../components/Camiseta';

const ConjuntoCamisetas = ({ camisetas }) => {

  function setCamiseta($id, $descripcion, $precio, $imagen, $talles) {
    localStorage.setItem('id_camiseta',$id);
    localStorage.setItem('descripcion',$descripcion);
    localStorage.setItem('precio',$precio);
    localStorage.setItem('imagen',$imagen);
    localStorage.setItem('talles',$talles);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        {camisetas.map((camiseta) => (
            <a onClick={() => setCamiseta(camiseta.id_camiseta, camiseta.descripcion, camiseta.precio, camiseta.imagen, camiseta.talles)} href={"/camiseta/"+camiseta.id_camiseta}>
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