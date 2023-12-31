const searchLocation = async (value) =>{
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    for (let i = 1; i <= 7; i++) {
        const res = await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        const data = await res.json()

        const result = data.results.filter( location => location.name.includes(value))
            result.forEach(location => {
            contendor.innerHTML += `
            <div class="card-container">
            <div class="card">
            <div class="front-content">
              <img src="https://pyxis.nymag.com/v1/imgs/dcb/698/eea6b585943cfb9f9ce6048e514f174dbc-The-Old-Man-and-the-Seat.rhorizontal.w700.jpg" alt="">
            </div>
            <div class="content">
              <p class="heading">${location.name}</p>
              <div>
                <div>
                    <p><small>location:</small> ${location.episode}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
            `
        })
    }
}

export { searchLocation }