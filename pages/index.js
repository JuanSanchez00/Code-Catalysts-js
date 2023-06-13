import Head from 'next/head';
import Header from '../components/header';
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
    const [allProducts, setAllProducts] = useState([]);
	const [countProducts, setCountProducts] = useState(0);
    const [camisetaActual, setCamisetaActual] = useState(null);
    const [camisetasVisibles, setCamisetasVisibles] = useState(camisetas);
    const [equiposVisibles, setEquiposVisibles] = useState(null);
    const [titulo, setTitulo] = useState("Todas las camisetas");

    const [visibilidadCarrusel, setVisibilidadCarrusel] = useState("block");
    const [visibilidadTitulo, setVisibilidadTitulo] = useState("none");
    const [visibilidadFiltrarLiga, setVisibilidadFiltrarLiga] = useState("none");
    const [visibilidadFiltrarEquipo, setVisibilidadFiltrarEquipo] = useState("none");
    const [visibilidadCamisetas, setVisibilidadCamisetas] = useState("none");
    const [visibilidadCamisetaActual, setVisibilidadCamisetaActual] = useState("none");
    const [visibilidadCarrito, setVisibilidadCarrito] = useState("none");

    return (
        <div>
            <Head>
                <title>La Camiseta No Se Mancha</title>
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
                setTitulo={setTitulo}
                setVisibilidadCarrito={setVisibilidadCarrito}
                todasLasCamisetas={camisetas} />
            <div className='contenedorBody'>
                <div style={{ display: visibilidadCarrito}}>
                    <Header 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        titulo={titulo}
                        visibilidadTitulo={visibilidadTitulo} />
                </div>
                    <div style={{ display: visibilidadCarrusel}}>
                        <Carousel/>
                    </div>
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
                            setVisibilidadCamisetaActual={setVisibilidadCamisetaActual}
                            setTitulo={setTitulo} />
                    </div>
                    <div style={{ display: visibilidadCamisetaActual }}>
                        <Camiseta 
                            camiseta={camisetaActual}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                </div>
            </div>
            <Footer/>
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas = await getCamisetas();
    let ligas = await getLigas();
    return {
      props: {
        camisetas,
        ligas,
      },
    };
  }