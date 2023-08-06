import Link from 'next/link';

export default function Index({
  equipos, 
}) {
  if (equipos.length > 0) {
    return (
      <div>
        <div className="contenedorFiltrar">
          <h2 className="tituloFiltrar">Filtrar por equipos</h2>
          {equipos !== null &&
            equipos.map((equipo) => (
              <Link className="items" href={"/camisetas/equipo/"+equipo.id_equipo}>
                <p> {equipo.nombre} </p>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

