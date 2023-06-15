export async function getCamisetas() {
  const camisetas = await fetch(
    //'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas'
    'http://localhost/Garcia-Sanchez-laravel/public/rest/camisetas'
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
    //`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/equipos/liga/${id}`
    `http://localhost/Garcia-Sanchez-laravel/public/rest/equipos/liga/${id}`
  ).then((response) => response.json());
  return ligas;
}

export async function getCamisetasPorLiga(id) {
  const ligas = await fetch(
    //`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas/liga/${id}`
    `http://localhost/Garcia-Sanchez-laravel/public/rest/camisetas/liga/${id}`
  ).then((response) => response.json());
  return ligas;
}

export async function getCamisetasPorEquipo(id) {
  const ligas = await fetch(
    //`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas/equipo/${id}`
    `http://localhost/Garcia-Sanchez-laravel/public/rest/camisetas/equipo/${id}`
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

export async function getEquipoPorID(id) {
  const equipo = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/equipo/${id}`
  ).then((response) => response.json());
  return equipo;
}

export async function registrarPedido(camisetas, email) {
  const json = '{ "email": "'+email+'", "camisetas": ['+camisetas+']}';
  fetch(`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/pedido`, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: json, // body data type must match "Content-Type" header
    })
}