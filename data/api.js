export async function getCamisetas() {
    const camisetas = await fetch(
      'https://garcia-sanchez-laravel-genaro08.vercel.app/rest/camisetas'
    ).then((response) => response.json());
    return camisetas;
  }