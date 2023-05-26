export default function Index(props) {
    return (
        <div className="contenedorFiltrar">
            <h4>Filtrar por equipos</h4>
                {props.equipos.map((equipo) => (
                    <a className="items" href={"/camisetas/equipo/"+equipo.id_equipo}><p> {equipo.nombre} </p></a>
                ))}
        </div>
    );
  }

  /*{props.equipos.map((equipo) => (
    <a href={"/camisetas/equipo/"+equipo.id_equipo}><p> {equipo.nombre} </p></a>
  ))}
*/
