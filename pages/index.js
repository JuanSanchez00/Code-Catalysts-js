import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carouselPrincipal';

export default function FirstPost({camisetas,ligas}) {
    return (
        <div>
            <Head>
                <title>La Camiseta No Se Mancha</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                <script  src="/regist_serviceWorker.js"></script> 
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <NavBar/>
            <Carousel/>
            <Footer/>
        </div>
    );
}