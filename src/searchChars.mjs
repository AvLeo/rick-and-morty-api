const searchChars =async (value) => {
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    for (let i = 1; i <= 42; i++) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        const data = await res.json()

        const result = data.results.filter( char => char.name.toLowerCase().includes(value.toLowerCase()))
            result.forEach(char => {
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
}

export { searchChars }