
async function get_characters (url_api) {
  // Enviar petición Get
  const resp = await fetch(url_api)
  // Obtener datos
  const data = await resp.json()
  return data.results
}

function show_characters (characters) {
  let cards = ''
  // Iterar arreglo
  for (let i = 0; i < characters.length; i++) {
    cards += `
    <article class="card">
      <img src="${characters[i].image}" />
      <div class="body-card">
        <h2>${characters[i].name}</h2>
        <span>Specie: ${characters[i].species}</span>
        <span>status: ${characters[i].status}</span>
        <span>Gender: ${characters[i].gender}</span>
        <span>Origin: ${characters[i].origin.name}</span>
      </div>
    </article>
    `
  }
  document.getElementById('section-cards').innerHTML = cards;
}

async function main () {
  const url = "https://rickandmortyapi.com/api/character"
  const characters = await get_characters(url)
  show_characters(characters)
}

main()