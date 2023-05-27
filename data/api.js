export async function getCamisetas() {
  const camisetas = await fetch(
    'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas'
  ).then((response) => response.json());
  return camisetas;
}

export async function getLigas() {
  const ligas = await fetch(
    'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/ligas'
  ).then((response) => response.json());
  return ligas;
}

export async function getEquiposPorLiga(id) {
  const ligas = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/equipos/liga/${id}`
  ).then((response) => response.json());
  return ligas;
}

export async function getCamisetasPorLiga(id) {
  const ligas = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas/liga/${id}`
  ).then((response) => response.json());
  return ligas;
}

export async function getCamisetasPorEquipo(id) {
  const ligas = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas/equipo/${id}`
  ).then((response) => response.json());
  return ligas;
}


export async function getCamisetaPorID(id) {
  const ligas = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camiseta/${id}`
  ).then((response) => response.json());
  return ligas;
}

export async function getLigaPorID(id) {
  const liga = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/liga/${id}`
  ).then((response) => response.json());
  return liga;
}

export async function registrarPedido() {
  const carrito = localStorage.getItem('carrito');
  const json = '{ "id_cliente": 1, "camisetas": ['+carrito+']}';
  console.log(json);
  fetch('https://garcia-sanchez-laravel-genaro08.vercel.app/rest/pedido', {
      method: 'POST', 
      mode: 'no-cors', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(json), // body data type must match "Content-Type" header
    })
}