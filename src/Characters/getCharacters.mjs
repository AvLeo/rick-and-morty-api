
const getCharacters = async (page) =>{
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await res.json()
    data.results.forEach( char => {
        contendor.innerHTML += `<div class="card">
        <p class="heading">
            <img src="${char.image}" alt="">
        </p>
        <p>
          ${char.name}
        </p>
        <p class="show-more">Ver Más
      </p></div>`
    })
}

export {getCharacters}