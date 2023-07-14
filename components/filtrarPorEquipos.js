import Link from 'next/link';

export default function Index({
  equipos, 
}) {
  if (equipos.length > 0) {
    return (
      <div>
        <div className="contenedorFiltrar">
          <h4>Filtrar por equipos</h4>
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

