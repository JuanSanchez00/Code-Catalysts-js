import Head from 'next/head';
import NavBar from '../components/navbar';
import Camiseta from '../components/camiseta';
import { getCamisetas } from "../data/api";


export default function Index({camisetas}) {
    return (
        <div>
            <Head>
                <title>Camisetas</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            {camisetas.map(camiseta => <Camiseta 
                                        descripcion={camiseta.descripcion} 
                                        precio={camiseta.precio} 
                                        imagen={camiseta.imagen}
                                        />)}
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