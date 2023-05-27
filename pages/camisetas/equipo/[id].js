import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '../../../components/navbar';
import ConjuntoCamisetas from '../../../components/conjuntoCamisetas';
import { getCamisetasPorEquipo, getEquipoPorID } from "../../../data/api";
import Footer from '../../../components/footer';

export default function Index(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Camisetas de {props.equipo[0].nombre} </title>
        <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
      </Head>
      <NavBar/>
      <h1 className="titulo">Camisetas de {props.equipo[0].nombre} </h1>
      <ConjuntoCamisetas camisetas={props.camisetas} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  let camisetas;
  camisetas = await getCamisetasPorEquipo(id);
  let equipo;
  equipo = await getEquipoPorID(id);
  return {
    props: {
      camisetas,
      equipo
    },
  };
}