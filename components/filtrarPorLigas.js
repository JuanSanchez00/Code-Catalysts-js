export default function FiltrarPorLigas(props) {
    return (
      <div className="contenedorFiltrar">
        <h4>Filtrar por ligas</h4>
        {props.ligas.map((liga) => (
          <a className="items" href={`/camisetas/liga/${liga.id_liga}`} key={liga.id_liga}>
            <p> {liga.nombre} </p>
          </a>
        ))}
      </div>
    );
  }

