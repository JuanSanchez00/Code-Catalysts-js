import Head from 'next/head';
import NavBar from '../components/navbar';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import { getCamisetas } from "../data/api";
import Footer from '../components/footer';

export default function Index({camisetas}) {
    return (
        <div>
            <Head>
                <title>Camisetas</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            <ConjuntoCamisetas camisetas={camisetas} />
            <Footer />
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas;
    camisetas = await getCamisetas();
  
    return {
      props: {
        camisetas,
      },
    };
  }