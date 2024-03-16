import Head from 'next/head';
import NavBar from '../../../components/navbar';
import Header from '../../../components/header';
import ChatGPT from '../../../components/chatGPT';
import FiltrarPorEquipos from '../../../components/filtrarPorEquipos';
import ConjuntoCamisetas from '../../../components/conjuntoCamisetas';
import MercadoPago from '../../../components/mercadoPago';
import Footer from '../../../components/footer';
import Error404 from '../../../components/error404';
import { getCamisetasPorLiga, getLigaPorID, getEquiposPorLiga } from "../../../data/api";
import { useState, useEffect } from "react";

export default function MostrarCamisetaPorLiga({camisetas,liga,equipos}) {

    const [allProducts, setAllProducts] = useState([]);
	const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    const [visibilidadContenido, setVisibilidadContenido] = useState("block");
    const [visibilidadMercadoPago, setVisibilidadMercadoPago] = useState("none");

    //al iniciar la pagina carga en countProducts lo que esta en el cantProducts de localStorage
    useEffect(() => {
        const cant = localStorage.getItem('cantProducts');
        if (cant) {
            setCountProducts(Number(cant));
        }
    }, []);
    //cada vez que countProduct se actualiza, su contenido se guarda en el cantProducts de localStorage
    useEffect(() => {
        localStorage.setItem('cantProducts', Number(countProducts));
    }, [countProducts]);
    useEffect(() => {
        const totalInicial = localStorage.getItem('total');
        if (totalInicial) {
            setTotal(Number(totalInicial));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('total', Number(total));
    }, [total]);
    useEffect(() => {
        const carrito = localStorage.getItem('carrito');
        if (carrito) {
            setAllProducts(JSON.parse(carrito));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(allProducts));
    }, [allProducts]);

    if (liga != null && liga.length > 0) {
      return (
          <div>
            <Head>
                <title>Camisetas de {liga[0].nombre}</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                <script  src="/regist_serviceWorker.js"></script> 
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <NavBar
                setAllProducts={setAllProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
            />
            <div className='contenedorGeneral' style={{ display: visibilidadContenido}}>
                <Header 
                    titulo={"Camisetas de "+liga[0].nombre}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    total={total}
                    setTotal={setTotal}
                    setVisibilidadContenido={setVisibilidadContenido}
                    setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                />
                <ChatGPT
                    busquedaChatGPT={liga[0].nombre}
                />
                <FiltrarPorEquipos
                    equipos={equipos}
                />
                <ConjuntoCamisetas 
                    camisetas={camisetas}
                />
            </div>
            <div style={{ display: visibilidadMercadoPago}}>
                <MercadoPago
                    total={total}
                    setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                    setVisibilidadContenido={setVisibilidadContenido}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    setTotal={setTotal}
                    setCountProducts={setCountProducts}
                />
            </div>
            <Footer/>
          </div>
      );
    }
    else {
      return <Error404/>;
    }
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    if (isNaN(Number(id))) {
        const liga = null;
        return {
            props: {
              liga
            },
          };
    }
    else {
        const camisetas = await getCamisetasPorLiga(id);
        const liga = await getLigaPorID(id);
        const equipos = await getEquiposPorLiga(id);
        return {
            props: {
                camisetas,
                liga,
                equipos
            },
        };
    }
}

