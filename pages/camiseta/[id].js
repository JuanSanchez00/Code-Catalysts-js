import {useRouter} from 'next/router';
import Head from 'next/head';

export default function Index() {
    const id = useRouter().query.id;
    return (
        <div>
            <Head>
                    <title>Descripcion Camiseta</title>
                    <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            Camiseta {id}
        </div>
    );
  }