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
    'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/equipos/liga/'+id
  ).then((response) => response.json());
  return ligas;
}

export async function getCamisetasPorLiga(id) {
  const ligas = await fetch(
    'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas/liga/'+id
  ).then((response) => response.json());
  return ligas;
}