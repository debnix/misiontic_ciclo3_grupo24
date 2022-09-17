const URL_API = "http://localhost:8080/mascotas"

function get_data_form (evt) {
  // Indicar por medio del evento que no recargue página
  evt.preventDefault()
  const form = evt.target
  const mascota = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    tipo_mascota: form.tipo_mascota.value,
    raza: form.raza.value,
    edad: form.edad.value,
    observacion: form.observacion.value
  }
  create(mascota)
  clear(form)
}

async function create (mascota) {
  // Enviar petición
  const resp = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mascota)
  })

  const text = await resp.text()
  alert(text)
}

function clear (form) {
  form.nombre.value = ""
  form.apellido.value = ""
  form.tipo_mascota.value = ""
  form.raza.value = ""
  form.edad.value = ""
  form.observacion.value = ""
}
