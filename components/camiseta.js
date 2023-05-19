import Image from 'next/image';
import styles from './camiseta.module.css';

export default function Camiseta(props) {
    let id_camiseta = props.idCamiseta;
    let descripcion = props.descripcion;
    let precio = props.precio;
    let talles = props.talles;
    let imagen = props.imagen;
    let id_equipo = props.idEquipo;
    let estado = props.estado;
    return (
        <div className={styles.contenedor}>  
            <Image
                src={imagen}
                width={100}
                height={100}
            />
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
        </div>
  );
}