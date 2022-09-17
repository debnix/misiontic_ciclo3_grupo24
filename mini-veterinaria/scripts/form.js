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

function set_form (form, mascota) {
  form.nombre.value = mascota.nombre
  form.apellido.value = mascota.apellido
  form.tipo_mascota.value = mascota.tipo_mascota
  form.raza.value = mascota.raza
  form.edad.value = mascota.edad
  form.observacion.value = mascota.observacion
}

function get_params () {
  const search = window.location.search
  const url = new URLSearchParams(search)
  const param_mascota = url.get("mascota")
  if (param_mascota) {
    const mascota = JSON.parse(param_mascota)
    const form = document.getElementById("form")
    set_form(form, mascota)
  }
}

get_params()
