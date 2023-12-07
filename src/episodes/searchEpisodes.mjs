const searchEpisodes = async (value) =>{
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    for (let i = 1; i <= 3; i++) {
        const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
        const data = await res.json()

        const result = data.results.filter( episode => episode.name.includes(value))
            result.forEach(episode => {
            contendor.innerHTML += `
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
}

export { searchEpisodes }