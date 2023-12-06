const getEpisodes =async () => {
    
    const domContent = document.querySelector('#cards-container')
    domContent.innerHTML += ""
    const res =await fetch('https://rickandmortyapi.com/api/episode')
    const data =await res.json()
    
    data.results.forEach( episode => {
        domContent.innerHTML += `
        <div class="card">
                <img src="" alt="">
                <p class="heading">
                  ${episode.name}
                </p>
                <p>
                  ${episode.episode}
                </p>
                <p>Ver más
              </p></div>
        `
    })
}

export { getEpisodes }