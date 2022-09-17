const URL_API = "http://localhost:8080/mascotas"
let update_data = {
  update: false,
  id: null
}

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

  if (update_data.update) {
    mascota.id = update_data.id
    update(mascota)
  } else {
    create(mascota)
  }

  clear(form)
}

async function update (mascota) {
  // Enviar petición
  const resp = await fetch(URL_API, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mascota)
  })
  const text = await resp.text()
  alert(text)
  window.location.href = "index.html"
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
    update_data.update = true
    update_data.id = mascota.id
    document.getElementById("btn-form").innerText = "Actualizar"
    document.getElementById("link-create").innerText = "Actualizar mascota"
  }
}

get_params()
