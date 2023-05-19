import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carouselPrincipal';

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>Inicio</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar/>
            <Carousel/>
            <Footer/>
        </div>
    );
  }