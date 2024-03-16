import Head from 'next/head';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Login from '../components/login';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function IniciarSesion() {
    const [visibilidadLogin, setVisibilidadLogin] = useState("none");
    const [visibilidadMensaje, setVisibilidadMensaje] = useState("block");
    const [allProducts, setAllProducts] = useState([]);
	const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);

    const styles = {
    contenedorMensajeLogin: {
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        margin: "10px",
        display: visibilidadMensaje,
      },
      mensajeLogin: {
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

    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('usuario') != null) {
            router.push('/');
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('usuario') != null) {
            setVisibilidadLogin("none");
            setVisibilidadMensaje("block");
        }
        else {
            setVisibilidadLogin("block");
            setVisibilidadMensaje("none");
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                <script  src="/regist_serviceWorker.js"></script> 
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <NavBar
                setAllProducts={setAllProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
            />
            <Header 
                titulo={"Iniciar sesión"}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                total={total}
                setTotal={setTotal}
            />
            <div className="formularioLogin" style={{ display: visibilidadLogin}}>
                <Login/>
            </div>
            <div className="contenedorMensajeLogin" style={styles.contenedorMensajeLogin}>
                <p style={styles.mensajeLogin}>Usted ya está logueado. Será redirigido a la página de inicio.</p>
            </div>
            <Footer/>
        </div>
    );
}