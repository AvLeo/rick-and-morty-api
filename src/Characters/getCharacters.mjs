
const getCharacters = async (page) =>{
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await res.json()
    
    data.results.forEach( char => {
      console.log(char)
      contendor.innerHTML += `  <div class="card-container">
        <div class="card">
        <div class="front-content">
          <img src="${char.image}" alt="">
        </div>
        <div class="content">
          <p class="heading">${char.name}</p>
          <div>
            <div>
                <p><small>ID:</small> ${char.id}</p>
                <p><small>STATUS:</small> ${char.status}</p>
            </div>
            <div>
                <p><small>LOCATION:</small> ${char.location.name}</p>
            </div>
          </div>
        </div>
      </div>
      </div>`
    })
}

export {getCharacters}