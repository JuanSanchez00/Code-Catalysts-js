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

export async function getEquipoPorID(id) {
  const equipo = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/equipo/${id}`
  ).then((response) => response.json());
  return equipo;
}

export async function registrarPedido(camisetas, email, token) {
  const json = '{ "email": "'+email+'", "token": "'+token+'","camisetas": ['+camisetas+']}';
  console.log(json);
  fetch(`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/pedido`, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: json, // body data type must match "Content-Type" header
    })
}

export async function login(email, contraseña) {
  const json = { email: email, password: contraseña };

  try {
    const response = await fetch('https://garcia-sanchez-laravel-genaro08.vercel.app/rest/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(json),
    });

    const data = await response.json();
    let login;
    if (response.ok) {
      login = true;
    } else {
      login = false;
    }
    return {
      login: login,
      token: data.token
    }

  } catch (error) {
    console.error('Ocurrió un error en la solicitud:', error);
  }
}

export async function logout(email, token) {
  const json = { email: email, token: token };

  try {
    const response = await fetch('https://garcia-sanchez-laravel-genaro08.vercel.app/rest/logout', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(json),
    });

    const data = await response.json();
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Ocurrió un error en la solicitud:', error);
  }
}

export async function register(email, contraseña) {
  const json = '{ "email": "'+email+'", "password": "'+contraseña+'"}';
  
  try {
    const response = await fetch(`https://garcia-sanchez-laravel-genaro08.vercel.app/rest/register`, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: json, // body data type must match "Content-Type" header
    });

    const data = await response.json();
    let registro;
    if (response.ok) {
      registro = true;
    } else {
      registro = false;
    }
    return {
      registro: registro,
      token: data.token
    }
  } catch (error) {
    console.error('Error en la petición de registro:', error);
    return registro;
  }
}

export async function getMisPedidos(email,token) {
  const pedidos = await fetch(
    `https://garcia-sanchez-laravel-genaro08.vercel.app/rest/pedidos?email=${email}&token=${token}`
  ).then((response) => response.json());
  return pedidos;
}