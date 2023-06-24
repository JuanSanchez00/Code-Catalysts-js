import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';

export default function MercadoPago({total}) {
    initMercadoPago('TEST-9dbee4e1-1184-45bb-a452-9278c1f6e7cd');
    const initialization = {
        amount: total
    };

    const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
        fetch("/process_payment", {
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
    });
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