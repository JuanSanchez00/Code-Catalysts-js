import React from 'react';
import Camiseta from '../components/Camiseta';

const ConjuntoCamisetas = ({ camisetas }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        {camisetas.map((camiseta) => (
          <Camiseta
            key={camiseta.id}
            descripcion={camiseta.descripcion}
            precio={camiseta.precio}
            imagen={camiseta.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default ConjuntoCamisetas;