const getLocation =async () => {
    
    const domContent = document.querySelector('#cards-container')
    domContent.innerHTML += ""
    const res =await fetch('https://rickandmortyapi.com/api/location')
    const data =await res.json()
    
    data.results.forEach( location => {
        domContent.innerHTML += `
        <div class="card">
                <img src="" alt="">
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