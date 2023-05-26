import {useRouter} from 'next/router';
import Head from 'next/head';
import NavBar from '../../../components/navbar';
import ConjuntoCamisetas from '../../../components/conjuntoCamisetas';
import { getCamisetasPorEquipo } from "../../../data/api";
import Footer from '../../../components/footer';

let id;

export default function Index(props) {
    id = useRouter().query.id;
    return (
        <div>
            <Head>
                <title>Camisetas de ...</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            <h1 className="titulo">Camisetas de ...</h1>
            <ConjuntoCamisetas camisetas={props.camisetas} />
            <Footer />
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas;
    camisetas = await getCamisetasPorEquipo(id);

    return {
      props: {
        camisetas,
      },
    };
  }