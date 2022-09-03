
async function obtener_usuarios (url_api) {
  // Realizar petición a la api
  // await -> esperar hasta que retorne la respuesta
  const resp = await fetch(url_api)
  const json = await resp.json()
  return json
}

function mostrar_usuarios (users) {
  // Referenciar tabla
  const table = document.getElementById('table')
  let tbody = '<tbody>'
  // Iterar el array users
  for (let i = 0; i < users.length; i++) {
    const obj = users[i]
    let address = obj.address.street
    address += `, ${obj.address.suite}`
    address += `, ${obj.address.city}`

    tbody += `
      <tr>
        <td>${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.username}</td>
        <td>${obj.email}</td>
        <td>${address}</td>
        <td>${obj.phone}</td>
        <td>${obj.website}</td>
        <td>${obj.company.name}</td>
      </tr>
    `
  }
  tbody += '</tbody>'
  // Adicionar cuerpo de la tabla al html
  table.innerHTML += tbody
}

async function main () {
  const url = "https://jsonplaceholder.typicode.com/users"
  const data = await obtener_usuarios(url)
  mostrar_usuarios(data)
}

main()