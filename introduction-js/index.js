
// Template Strings
let nombre = "Andrés"
let apellido = "quintero"
console.log(`Nombre: ${nombre} Apellido: ${apellido}`)


// Referenciar div
const div = document.getElementById('app')

// Adicionar texto 
div.innerText = 'Hola mundo desde java Script'
// Adicionar código html
div.innerHTML = `
  <h2>Grupo 24</h2>
  <h4>Introducción a Html con Js</h4>
  <p>Esto es un ejemplo de un párrafo desde js</p>
`
