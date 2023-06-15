import { getCamisetasPorEquipo} from "../data/api";

export default function Index({
  equipos, 
  setCamisetasVisibles, 
  setVisibilidadFiltrarEquipo,
  setTitulo,
  setVisibilidadAtrasLiga,
  setTituloLiga
}) {
  
  async function handleClickEquipos (equipo){
    let camisetas = await getCamisetasPorEquipo(equipo.id_equipo);
    setCamisetasVisibles(camisetas); 
    setVisibilidadAtrasLiga("block");
    setVisibilidadFiltrarEquipo("none");
    setTitulo("Camisetas de "+equipo.nombre);
    setTituloLiga(equipo.liga);
  }

  return (
    <div>
      <div className="contenedorFiltrar">
        <h4>Filtrar por equipos</h4>
        {equipos !== null &&
          equipos.map((equipo) => (
            <a className="items">
              <p onClick={() => handleClickEquipos(equipo)}> {equipo.nombre} </p>
            </a>
          ))}
      </div>
    </div>
  );
}

