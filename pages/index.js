import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carouselPrincipal';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import FiltrarPorLigas from '../components/filtrarPorLigas';
import FiltrarPorEquipos from '../components/filtrarPorEquipos';
import Camiseta from '../components/pedidoCamiseta';
import { getCamisetas } from "../data/api";
import { getLigas } from "../data/api";
import { useState } from "react";

export default function FirstPost({camisetas,ligas}) {
        
    const [visibilidadCarrusel, setVisibilidadCarrusel] = useState("block");
    const [visibilidadTitulo, setVisibilidadTitulo] = useState("none");
    const [visibilidadFiltrarLiga, setVisibilidadFiltrarLiga] = useState("none");
    const [visibilidadFiltrarEquipo, setVisibilidadFiltrarEquipo] = useState("none");
    const [visibilidadCamisetas, setVisibilidadCamisetas] = useState("none");
    const [visibilidadCamisetaActual, setVisibilidadCamisetaActual] = useState("none");

    const [camisetaActual, setCamisetaActual] = useState(null);
    const [camisetasVisibles, setCamisetasVisibles] = useState(camisetas);
    const [equiposVisibles, setEquiposVisibles] = useState(null);
    const [titulo, setTitulo] = useState("Todas las camisetas");

    return (
        <div>
            <Head>
                <title>Inicio</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
            </Head>
            <NavBar 
                setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga} 
                setVisibilidadCarrusel={setVisibilidadCarrusel} 
                setVisibilidadCamisetas={setVisibilidadCamisetas} 
                setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                setCamisetasVisibles={setCamisetasVisibles}
                setVisibilidadCamisetaActual={setVisibilidadCamisetaActual} 
                setVisibilidadTitulo={setVisibilidadTitulo} 
                setTitulo={setTitulo} />
            <div style={{ display: visibilidadCarrusel}}>
                <Carousel/>
            </div>
            <h1 className="titulo" style={{ display: visibilidadTitulo }}> {titulo} </h1>
            <div style={{ display: visibilidadFiltrarLiga }}>
                <FiltrarPorLigas 
                    ligas={ligas} 
                    setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga} 
                    setCamisetasVisibles={setCamisetasVisibles} 
                    setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                    setEquiposVisibles={setEquiposVisibles} 
                    setTitulo={setTitulo} />
            </div>
            <div style={{ display: visibilidadFiltrarEquipo }}>
                <FiltrarPorEquipos  
                    equipos={equiposVisibles} 
                    setCamisetasVisibles={setCamisetasVisibles} 
                    setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                    setTitulo={setTitulo} />
            </div>
            <div style={{ display: visibilidadCamisetas }} >
                <ConjuntoCamisetas 
                    camisetas={camisetasVisibles}
                    setCamisetaActual={setCamisetaActual} 
                    setVisibilidadCamisetas={setVisibilidadCamisetas}
                    setVisibilidadFiltrarEquipo = {setVisibilidadFiltrarEquipo} 
                    setVisibilidadFiltrarLiga = {setVisibilidadFiltrarLiga}
                    setVisibilidadTitulo={setVisibilidadTitulo}
                    setVisibilidadCamisetaActual={setVisibilidadCamisetaActual} />
            </div>
            <div style={{ display: visibilidadCamisetaActual }}>
                <Camiseta camiseta={camisetaActual}/>
            </div>
            <Footer/>
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas= await getCamisetas();
    let ligas = await getLigas();
    return {
      props: {
        camisetas,
        ligas,
      },
    };
  }