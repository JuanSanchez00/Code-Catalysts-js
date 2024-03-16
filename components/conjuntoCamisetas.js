import React from 'react';
import Camiseta from '../components/camiseta';
import Link from 'next/link';

const ConjuntoCamisetas = ({
    camisetas
}) => {

  if (camisetas != null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          {camisetas.length === 0 ? (
            <p>No hay camisetas disponibles en este momento.</p>
          ) : (
            <div>
              {camisetas.map((camiseta) => (
                <Link href={"/camiseta/"+camiseta.id_camiseta} >
                  <Camiseta 
                    descripcion={camiseta.descripcion}
                    precio={camiseta.precio}
                    imagen={camiseta.imagen}

                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ConjuntoCamisetas;