export default function Index(props) {
    return (
        <div className="contenedorFiltrar">
            <h4>Filtrar por ligas</h4>
                {props.ligas.map((liga) => (
                    <a className="items" href={"/camisetas/liga/"+liga.id_liga}><p> {liga.nombre} </p></a>
                ))}
        </div>
    );
  }

