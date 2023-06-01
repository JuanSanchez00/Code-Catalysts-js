import styles from './pedidoCamiseta.module.css';
import { registrarPedido } from "../data/api";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {FormGroup, Label, Input} from 'reactstrap';

export default function Camiseta({camiseta}) {
    let id,imagen,descripcion,precio,talles; 
    
    if(camiseta != null){
        id = camiseta.id_camiseta;
        descripcion = camiseta.descripcion;
        imagen = camiseta.imagen;
        precio = camiseta.precio;
        talles = camiseta.talles.split(' ');
    }
    const[talle, setTalle] = useState('S');
    const cambioTalle=e=>{
        setTalle(e.target.value);
      }

    function handleClick() {
        //if (typeof window !== 'undefined') {
          if (localStorage.getItem('carrito') == null || localStorage.getItem('carrito') == "") {
              localStorage.setItem('carrito','{"id_camiseta": '+id+',"talle": "'+talle+'"}');
          }
          else {
            localStorage.setItem('carrito',localStorage.getItem('carrito')+',{"id_camiseta": '+id+',"talle": "'+talle+'"}');
          }
       // }
        alert("La camisera "+descripcion+" con talle "+talle+" se ha agregado al carrito.")
      };

      function finalizarCompra() {
        registrarPedido();
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
                        onClick={() => handleClick()}
                        className={styles.boton}
                    >
                        Agregar al carrito
                    </button>
                    <button 
                        onClick={() => finalizarCompra()}
                        className={styles.boton}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        );
    }
}