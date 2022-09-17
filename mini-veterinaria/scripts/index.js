const URL_API = "http://localhost:8080/mascotas"
let ID_MASCOTA = -1

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
        <td>
          <button class="btn btn-warning" onclick='update(${JSON.stringify(obj)})'>Actualizar</button>
          &nbsp;
          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="save_id(${obj.id})">Eliminar</button>
        </td>
      </tr>
    `
  }

  tbody.innerHTML = tr_body
}

function save_id (id) {
  ID_MASCOTA = id
}

function update (mascota) {
  window.location.href = `form.html?mascota=${JSON.stringify(mascota)}`
}

async function delete_mascota () {
  // Enviar petición
  const resp = await fetch(`${URL_API}/${ID_MASCOTA}`, {
    method: 'DELETE'
  })
  const text = await resp.text()
  // alert(text)
  main()
}

async function main () {
  const mascotas = await get_mascotas()
  show(mascotas)
}

main()