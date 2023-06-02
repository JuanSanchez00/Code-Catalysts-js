import { useState } from "react";
import { registrarPedido } from "../data/api";

export default function Header ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
    titulo,
    visibilidadTitulo,
}) {
    let json;
    
    const [active, setActive] = useState(false);
    const [mailCliente, setMailCliente] = useState('');
    const [visibilidadMailCliente, setVisibilidadMailCliente] = useState("none");
    
    const eliminarCamiseta = product => {
		const results = allProducts.filter(
			item => item.key !== product.key
		);

		setCountProducts(countProducts - 1);
		setAllProducts(results);
        setVisibilidadMailCliente("none");
	};

    const vaciarCarrito = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
        setVisibilidadMailCliente("none");
	};

    const finalizarCompra = () => {
        if (mailCliente == '') {
            setVisibilidadMailCliente('block');
        }
        else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const isValidEmail = emailRegex.test(mailCliente);
            if (isValidEmail) {
                allProducts.forEach((producto, index) => {
                    if (index === 0) {
                        json = '{"id_camiseta": '+producto.id+',"talle": "'+producto.talle+'"}';
                    } 
                    else {
                        json = json + ',{"id_camiseta": '+producto.id+',"talle": "'+producto.talle+'"}';
                    }
                });
                registrarPedido(json,mailCliente);
                setVisibilidadMailCliente('none');
                setMailCliente('');
                vaciarCarrito();
                alert("Su compra se ha realizado con éxito.");
            }
            else {
                alert("Debe ingresar un email válido");
            }
        }
	};

    return (
        <header>
            <h1 className="titulo" style={{ display: visibilidadTitulo }}> {titulo} </h1>
            <div className='container-icon'>
                <div
                    className='container-cart-icon'
                    onClick={() => setActive(!active)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-cart'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        />
                    </svg>
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>

                <div
                    className={`container-cart-products ${
                        active ? '' : 'hidden-cart'
                    }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                {product.descripcion}
                                            </span>
                                            <p className='titulo-producto-carrito'>
                                                {product.talle}
                                            </p>
                                        </div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            className='icon-close'
                                            onClick={() => eliminarCamiseta(product)}
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                ))}
                            </div>

                            <button className='btn-clear-all' onClick={vaciarCarrito}>
                                Vaciar Carrito
                            </button>
                            <div style={{ display: visibilidadMailCliente }}>
                                <label className="labelEmail">
                                    Ingrese su email:
                                </label>
                                <input
                                    className="inputEmail"
                                    type="text"
                                    value={mailCliente}
                                    onChange={(e) => setMailCliente(e.target.value)}
                                />
                            </div>
                            <button className='btn-clear-all' onClick={finalizarCompra}>
                                Finalizar compra
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
}