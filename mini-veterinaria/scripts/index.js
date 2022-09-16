const URL_API = "http://localhost:8080/mascotas"

async function get_mascotas () {
  // Enviar petición
  const resp = await fetch(URL_API)
  // Obtener datos de la petición
  const mascotas = await resp.json()
  return mascotas
}

function show (mascotas) {
  const tbody = document.getElementById("tbody")
  let tr_body = ''
  // Iterar mascotas
  for (let i = 0; i < mascotas.length; i++) {
    const obj = mascotas[i]
    tr_body += `
      <tr>
        <td>${obj.id}</td>
        <td>${obj.nombre}</td>
        <td>${obj.apellido}</td>
        <td>${obj.tipo_mascota}</td>
        <td>${obj.raza}</td>
        <td>${obj.edad}</td>
        <td>${obj.observacion}</td>
      </tr>
    `
  }

  tbody.innerHTML = tr_body
}

async function main () {
  const mascotas = await get_mascotas()
  show(mascotas)
}

main()