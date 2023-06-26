import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';

export default function MercadoPago({total}) {
    initMercadoPago('TEST-d9fbc7c1-c76a-4e0a-bcd0-2a74330f9401');
    const initialization = {
        amount: total
    };

    const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    //console.log(JSON.stringify(formData));
    /*return new Promise((resolve, reject) => {
        fetch("http://localhost/Garcia-Sanchez-laravel/public/rest/process_payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {
            // recibir el resultado del pago
            resolve();
        })
        .catch((error) => {
            console.log("ERROR: "+error);
            // manejar la respuesta de error al intentar crear el pago
            reject();
        });
    });*/
    };
    const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log("ERROR: "+error);
    };
    const onReady = async () => {
    /*
        Callback llamado cuando el Brick está listo.
        Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
    };
    return (
        <div>  
            <CardPayment
                    initialization={initialization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                />
        </div>
  );
}