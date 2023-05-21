import {useRouter} from 'next/router';
import Head from 'next/head';
import NavBar from '../../../components/navbar';
import ConjuntoCamisetas from '../../../components/conjuntoCamisetas';
import { getCamisetasPorLiga } from "../../../data/api";
import { getEquiposPorLiga } from "../../../data/api";
import Footer from '../../../components/footer';

let id;

export default function Index(props) {
    id = useRouter().query.id;
    return (
        <div>
            <Head>
                <title>Camisetas</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            <h4>Filtrar por equipos</h4>
            {props.equipos.map((equipo) => (
                <a href={"/camisetas/equipo/"+equipo.id_equipo}><p> {equipo.nombre} </p></a>
              ))}
            <ConjuntoCamisetas camisetas={props.camisetas} />
            <Footer />
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas;
    camisetas = await getCamisetasPorLiga(id);
    let equipos;
    equipos = await getEquiposPorLiga(id);
    return {
      props: {
        camisetas,
        equipos,
      },
    };
  }