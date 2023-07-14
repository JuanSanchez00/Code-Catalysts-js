import Head from 'next/head';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Pedidos from '../components/pedidos';
import MercadoPago from '../components/mercadoPago';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { getMisPedidos } from "../data/api";

export default function MostrarPedidos() {
    const [visibilidadPedidos, setVisibilidadPedidos] = useState("block");
    const [visibilidadMensaje, setVisibilidadMensaje] = useState("none");
    const [pedidos, setPedidos] = useState("");
    const [cargandoPedidos, setCargandoPedidos] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
	const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    const [visibilidadContenido, setVisibilidadContenido] = useState("block");
    const [visibilidadMercadoPago, setVisibilidadMercadoPago] = useState("none");
    let email,token;

    const styles = {
    contenedorMensajePedidos: {
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        margin: "10px",
        display: visibilidadMensaje,
      },
      mensajePedidos: {
        fontSize: "1.5em",
        fontWeight: "bold",
      },
    };

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

    //para que si el usuario ingresa a la ruta /pedidos lo redireccione a /
    //TARDA UN POCO EN REDIRECCIONAR
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('usuario') == null) {
            router.push('/');
        }
    }, []);

    useEffect(() => {
        //funcion creada para que getMisPedidos este dentro de una funcion async
        const fetchData = async () => {
            console.log("llega");
            email = localStorage.getItem('usuario');
            if (email != null) {
                setVisibilidadPedidos("block");
                setVisibilidadMensaje("none");
                alert
            }
            else {
                setVisibilidadPedidos("none");
                setVisibilidadMensaje("block");
            }
            token = localStorage.getItem('token');
            const pedidosObtenidos = await getMisPedidos(email,token);
            setPedidos(pedidosObtenidos);
            setCargandoPedidos(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Head>
                <title>Mis Pedidos</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                <script  src="/regist_serviceWorker.js"></script> 
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <NavBar
                setAllProducts={setAllProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
            />
            {cargandoPedidos !== true && (
                <div className='contenedorGeneral' style={{ display: visibilidadContenido}}>
                    <Header 
                        titulo={"Mis pedidos"}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        total={total}
                        setTotal={setTotal}
                        setVisibilidadContenido={setVisibilidadContenido}
                        setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                    />
                        <div style={{ display: visibilidadPedidos}}>
                            <Pedidos
                                pedidos={pedidos}
                            />
                        </div>
                    <div style={styles.contenedorMensajePedidos}>
                        <p style={styles.mensajeRegister}>Usted ya está logueado. Será redirigido a la página de inicio.</p>
                    </div>
                    <Footer/>
                </div>
            )}
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
                <Footer/>
            </div>
        </div>
    );
}

