import Head from 'next/head';
import NavBar from '../components/navbar';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import { getCamisetas } from "../data/api";
import { getLigas } from "../data/api";
import Footer from '../components/footer';
import FiltrarPorLigas from '../components/filtrarPorLigas';

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>Camisetas</title>
        <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
      </Head>
      <NavBar/>
      <h1 className="titulo">Todas las camisetas</h1>
      <FiltrarPorLigas ligas={props.ligas} />
      <ConjuntoCamisetas camisetas={props.camisetas} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  let camisetas;
  camisetas = await getCamisetas();
  let ligas;
  ligas = await getLigas();
  return {
    props: {
      camisetas,
      ligas,
    },
  };
}