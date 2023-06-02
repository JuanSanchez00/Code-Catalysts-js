import styles from './pedidoCamiseta.module.css';
import { registrarPedido } from "../data/api";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {FormGroup, Label, Input} from 'reactstrap';


export default function Camiseta({camiseta,titulo,setVisibilidadTitulo,allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
    }) {
    let id,imagen,descripcion,precio,talles; 

    const [key, setKey] = useState(0);
    
    if(camiseta != null){
        id = camiseta.id_camiseta;
        descripcion = camiseta.descripcion;
        imagen = camiseta.imagen;
        precio = camiseta.precio;
        talles = camiseta.talles.split(' ');
    }
    const[talle, setTalle] = useState(null);
    const cambioTalle=e=>{
        setTalle(e.target.value);
      }

    function agregarAlCarrito() {
        if (talle == null) {
            alert("Por favor seleccione un talle de la camiseta.");
        }
        else {
            console.log("key: "+key);
            let producto = {
                key: key,
                //key: countProducts,
                id: id,
                descripcion: descripcion,
                talle: talle
            };
            setKey(key + 1);
            //console.log("key: "+key);
            setAllProducts([...allProducts,producto]);
            setCountProducts(countProducts + 1);
        }
    };

    if(camiseta !== null){
        return (
            <div className={styles.contenedorPrincipal}>
                
                    <img
                        className={styles.imagen}
                        src={imagen}
                        width={400}
                        height={400}
                    />
            
                <div className={styles.contenedorSecundario}>
                    <h2 className={styles.descripcion}>{descripcion}</h2>
                    <h2 className={styles.precio}>${precio}</h2>
                    <FormGroup>
                        <h4>
                            Selecciona un talle
                        </h4>
                        <FormGroup className={styles.formGroupRadios}>
                            {talles.map((talle,index) => (
                                <FormGroup>
                                    <Input
                                        className={styles.input}
                                        id={"radio"+index}
                                        type="radio"
                                        value={talle}
                                        checked={talle == {talle} ? true : false}
                                        onChange={cambioTalle}
                                    />
                                    <Label className={styles.label} for={"radio"+index}>
                                        {talle}
                                    </Label>
                                </FormGroup>
                            ))}
                        </FormGroup>
                    </FormGroup>
                    <button 
                        onClick={() => agregarAlCarrito()}
                        className={styles.boton}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        );
    }
}