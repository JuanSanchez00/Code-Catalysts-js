import Head from 'next/head';
import Header from '../components/header';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carouselPrincipal';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import FiltrarPorLigas from '../components/filtrarPorLigas';
import FiltrarPorEquipos from '../components/filtrarPorEquipos';
import Camiseta from '../components/pedidoCamiseta';
import Login from '../components/login';
import Register from '../components/register';
import Pedidos from '../components/pedidos';
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
    const [tituloLiga, setTituloLiga] = useState("");
    const [tituloEquipo, setTituloEquipo] = useState("");
    const [idLiga, setIdLiga] = useState("");
    const [idEquipo, setIdEquipo] = useState("");

    const [visibilidadCarrusel, setVisibilidadCarrusel] = useState("block");
    const [visibilidadLogin, setVisibilidadLogin] = useState("none");
    const [visibilidadRegister, setVisibilidadRegister] = useState("none");
    const [visibilidadTitulo, setVisibilidadTitulo] = useState("none");
    const [visibilidadFiltrarLiga, setVisibilidadFiltrarLiga] = useState("none");
    const [visibilidadFiltrarEquipo, setVisibilidadFiltrarEquipo] = useState("none");
    const [visibilidadCamisetas, setVisibilidadCamisetas] = useState("none");
    const [visibilidadCamisetaActual, setVisibilidadCamisetaActual] = useState("none");
    const [visibilidadCarrito, setVisibilidadCarrito] = useState("none");
    const [visibilidadAtrasLiga, setVisibilidadAtrasLiga] = useState("none");
    const [visibilidadAtrasEquipo, setVisibilidadAtrasEquipo] = useState("none");
    const [visibilidadIniciarSesion, setVisibilidadIniciarSesion] = useState("block");
    const [visibilidadCerrarSesion, setVisibilidadCerrarSesion] = useState("none");
    const [visibilidadPedidos, setVisibilidadPedidos] = useState("none");
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
                todasLasCamisetas={camisetas} 
                visibilidadAtrasLiga={visibilidadAtrasLiga}
                visibilidadAtrasEquipo={visibilidadAtrasEquipo}
                tituloLiga={tituloLiga}
                tituloEquipo={tituloEquipo}
                idLiga={idLiga}
                idEquipo={idEquipo}
                setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                setVisibilidadAtrasEquipo={setVisibilidadAtrasEquipo}
                setEquiposVisibles={setEquiposVisibles}
                visibilidadCerrarSesion={visibilidadCerrarSesion}
                visibilidadIniciarSesion={visibilidadIniciarSesion}
                setVisibilidadLogin={setVisibilidadLogin}
                setVisibilidadRegister={setVisibilidadRegister}
                setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                setVisibilidadPedidos={setVisibilidadPedidos}
                visibilidadPedidos={visibilidadPedidos} />
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
                    <div style={{ display: visibilidadLogin}}>
                        <Login
                            setVisibilidadLogin={setVisibilidadLogin}
                            setVisibilidadRegister={setVisibilidadRegister}
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                            setTitulo={setTitulo}
                            setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                            setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                            todasLasCamisetas={camisetas}
                            setCamisetasVisibles={setCamisetasVisibles}  />
                    </div>
                    <div style={{ display: visibilidadRegister}}>
                        <Register
                            setVisibilidadLogin={setVisibilidadLogin}
                            setVisibilidadRegister={setVisibilidadRegister}
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                            setTitulo={setTitulo}
                            setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                            setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                            todasLasCamisetas={camisetas}
                            setCamisetasVisibles={setCamisetasVisibles}  />
                    </div>
                    <div style={{ display: visibilidadPedidos}}>
                        <Pedidos  />
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
                            setTitulo={setTitulo} 
                            setIdLiga={setIdLiga} />
                    </div>
                    <div style={{ display: visibilidadFiltrarEquipo }}>
                        <FiltrarPorEquipos  
                            equipos={equiposVisibles} 
                            setCamisetasVisibles={setCamisetasVisibles} 
                            setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                            setTitulo={setTitulo}
                            setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                            setTituloLiga={setTituloLiga} />
                    </div>
                    <div style={{ display: visibilidadCamisetas }} >
                        <ConjuntoCamisetas 
                            camisetas={camisetasVisibles}
                            setCamisetaActual={setCamisetaActual} 
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarEquipo = {setVisibilidadFiltrarEquipo} 
                            setVisibilidadFiltrarLiga = {setVisibilidadFiltrarLiga}
                            setVisibilidadCamisetaActual={setVisibilidadCamisetaActual}
                            setTitulo={setTitulo}
                            setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                            setVisibilidadAtrasEquipo={setVisibilidadAtrasEquipo}
                            setTituloLiga={setTituloLiga} 
                            setTituloEquipo={setTituloEquipo}
                            setIdLiga={setIdLiga}
                            setIdEquipo={setIdEquipo} />
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