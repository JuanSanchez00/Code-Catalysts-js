import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '../../components/navbar';
import PedidoCamiseta from '../../components/pedidoCamiseta';
import { getCamisetaPorID } from "../../data/api";

export default function Index(props) {
  const router = useRouter();
  const { id } = router.query;
  let descripcion = props.camiseta[0].descripcion; 

  return (
    <div>
      <Head>
        <title>{descripcion}</title>
        <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
      </Head>
      <NavBar/>
      <PedidoCamiseta camiseta={props.camiseta[0]}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  let camiseta;
  camiseta = await getCamisetaPorID(id);
  
  return {
    props: {
      camiseta,
    },
  };
}