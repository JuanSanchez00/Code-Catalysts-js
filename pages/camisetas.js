import Head from 'next/head';
import NavBar from '../components/navbar';
import Header from '../components/header';
import FiltrarPorLigas from '../components/filtrarPorLigas';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import MercadoPago from '../components/mercadoPago';
import Footer from '../components/footer';
import { getCamisetas } from "../data/api";
import { getLigas } from "../data/api";
import { useState, useEffect } from "react";
import Error404 from '../components/error404';

export default function Camisetas({camisetas,ligas}) {

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

    if(camisetas != null && ligas != null){
        return (
            <div>
                <Head>
                    <title>Camisetas</title>
                    <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                    <script  src="/regist_serviceWorker.js"></script> 
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <NavBar
                    setAllProducts={setAllProducts}
                    setCountProducts={setCountProducts}
                    setTotal={setTotal}
                />
                <div style={{ display: visibilidadContenido}}>
                    <Header 
                        titulo={"Todas las camisetas"}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        total={total}
                        setTotal={setTotal}
                        setVisibilidadContenido={setVisibilidadContenido}
                        setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                    />
                    <FiltrarPorLigas
                        ligas={ligas}
                    />
                    <ConjuntoCamisetas 
                        camisetas={camisetas}
                    />
                </div>
                <div className='contenedorGeneral' style={{ display: visibilidadMercadoPago}}>
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
    }else{
        return <Error404/>;
    }
}

export async function getServerSideProps() {
    try{
        let camisetas = await getCamisetas();
        let ligas = await getLigas();
        return {
        props: {
            camisetas,
            ligas,
        },
        };
    }catch(error){
        let camisetas = null;
        let ligas = null;
        return{
            props: {
                camisetas,
                ligas,
            },
        };
    }
  }