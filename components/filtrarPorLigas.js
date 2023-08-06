import Link from 'next/link';

export default function FiltrarPorLigas({
  ligas
}) {
  return (
    <div className="contenedorFiltrar">
      <h4>Filtrar por ligas</h4>
      {ligas.map((liga) => (
        <Link className="items" href={"camisetas/liga/"+liga.id_liga}>
          <p> {liga.nombre} </p>
        </Link>
      ))}
    </div>
  );
}
