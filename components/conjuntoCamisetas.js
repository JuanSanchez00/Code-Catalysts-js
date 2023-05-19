import React from 'react';
import Camiseta from '../components/camiseta';

const ConjuntoCamisetas = ({ camisetas }) => {
  return (
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
  );
};

export default ConjuntoCamisetas;