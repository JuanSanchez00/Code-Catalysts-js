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
    const [allProducts, setAllProducts] = useState([]);//producto en el carrito
    const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    const [key, setKey] = useState(0);

    const [visibilidadCarrusel, setVisibilidadCarrusel] = useState("block");
    const [visibilidadTitulo, setVisibilidadTitulo] = useState("none");
    const [visibilidadFiltrarLiga, setVisibilidadFiltrarLiga] = useState("none");
    const [visibilidadFiltrarEquipo, setVisibilidadFiltrarEquipo] = useState("none");
    const [visibilidadCamisetas, setVisibilidadCamisetas] = useState("none");
    const [visibilidadCamisetaActual, setVisibilidadCamisetaActual] = useState("none");
    const [visibilidadCarrito, setVisibilidadCarrito] = useState("none");

    const [camisetaActual, setCamisetaActual] = useState(null);
    const [camisetasVisibles, setCamisetasVisibles] = useState(camisetas);
    const [equiposVisibles, setEquiposVisibles] = useState(null);
    const [titulo, setTitulo] = useState("Todas las camisetas");

    

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
             <div style={{ display: visibilidadCarrito}}>
                <Header 
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
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
                    setVisibilidadTitulo={setVisibilidadTitulo}
                    setVisibilidadCamisetaActual={setVisibilidadCamisetaActual}
                    setTitulo={setTitulo} />
            </div>
            <div style={{ display: visibilidadCamisetaActual }}>
                <Camiseta 
                    titulo={titulo}
                    visibilidadTitulo={visibilidadTitulo}
                    camiseta={camisetaActual}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    setKey={setKey}
                    key={key} />
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