const getEpisodes =async (page) => {
    
    const domContent = document.querySelector('#cards-container')
    domContent.innerHTML = ""
    const res =await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    const data =await res.json()
    
    data.results.forEach( episode => {
        domContent.innerHTML += `
        <div class="card">
              <div class="div-img">
                <img src="./src/image/3D_Animation_Style_imagen_tipo_logo_de_rick_y_morty_con_paleta_1.jpg" alt="">
              </div>
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