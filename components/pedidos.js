export default function Pedidos({pedidos}) {
    return (
        <div>
            <p>Pedidos</p>
        </div>
    );
}

export async function getServerSideProps() {
    let pedidos /*= await getMisPedidos()*/;
    return {
      props: {
        pedidos,
      },
    };
  }