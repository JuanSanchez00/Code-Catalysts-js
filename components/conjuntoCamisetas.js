import React from 'react';
import Camiseta from '../components/Camiseta';

const ConjuntoCamisetas = ({ camisetas }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        {camisetas.map((camiseta) => (
          <a href={"/camiseta/"+camiseta.id_camiseta}>
            <Camiseta
              key={camiseta.id}
              descripcion={camiseta.descripcion}
              precio={camiseta.precio}
              imagen={camiseta.imagen}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConjuntoCamisetas;