const getLocation =async (page) => {
    
    const domContent = document.querySelector('#cards-container')
    domContent.innerHTML = ""
    const res =await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    const data =await res.json()
    
    data.results.forEach( location => {
        domContent.innerHTML += `
        <div class="card">
                <img src="https://pyxis.nymag.com/v1/imgs/dcb/698/eea6b585943cfb9f9ce6048e514f174dbc-The-Old-Man-and-the-Seat.rhorizontal.w700.jpg" alt="">
                <p class="heading"> 
                  ${location.name}
                </p>
                <p>
                  ${location.type}
                </p>
                <p>Ver más
              </p></div>
        `
    })
}

export { getLocation }