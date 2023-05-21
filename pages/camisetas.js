import Head from 'next/head';
import NavBar from '../components/navbar';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import { getCamisetas } from "../data/api";
import { getLigas } from "../data/api";
import Footer from '../components/footer';

export default function Index(props) {
    return (
        <div>
            <Head>
                <title>Camisetas</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            <h4>Filtrar por ligas</h4>
            {props.ligas.map((liga) => (
                <a href={"/camisetas/liga/"+liga.id_liga}><p> {liga.nombre} </p></a>
              ))}
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