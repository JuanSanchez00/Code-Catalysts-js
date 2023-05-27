import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '../../../components/navbar';
import ConjuntoCamisetas from '../../../components/conjuntoCamisetas';
import { getCamisetasPorLiga } from "../../../data/api";
import { getLigaPorID} from "../../../data/api";
import { getEquiposPorLiga } from "../../../data/api";
import Footer from '../../../components/footer';
import FiltrarPorEquipos from '../../../components/filtrarPorEquipos';

export default function Index(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log('ligaActual:', props.ligaActual);
  return (
    <div>
      <Head>
        <title>Camisetas de {props.ligaActual[0].nombre}</title>
        <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
      </Head>
      <NavBar/>
      <h1 className="titulo">Camisetas de {props.ligaActual[0].nombre}</h1>
      <FiltrarPorEquipos equipos={props.equipos} />
      <ConjuntoCamisetas camisetas={props.camisetas} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Obtener el valor de id desde el contexto
  let camisetas;
  camisetas = await getCamisetasPorLiga(id);
  let equipos;
  equipos = await getEquiposPorLiga(id);
  let ligaActual;
  ligaActual = await getLigaPorID(id);
  return {
    props: {
      camisetas,
      equipos,
      ligaActual,
    },
  };
}