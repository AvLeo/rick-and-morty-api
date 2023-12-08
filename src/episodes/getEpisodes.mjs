const getEpisodes =async (page) => {
    
    const domContent = document.querySelector('#cards-container')
    domContent.innerHTML = ""
    const res =await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    const data =await res.json()
    
    data.results.forEach( episode => {
        domContent.innerHTML += `
        <div class="card-container">
        <div class="card">
        <div class="front-content">
          <img src="./src/image/3D_Animation_Style_imagen_tipo_logo_de_rick_y_morty_con_paleta_1.jpg" alt="">
        </div>
        <div class="content">
          <p class="heading">${episode.name}</p>
          <div>
            <div>
                <p><small>EPISODE:</small> ${episode.episode}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        `
    })
}

export { getEpisodes }