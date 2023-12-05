const getCharacters = async (page) =>{
    const contendor = document.querySelector('#cards-container')
    contendor.innerHTML = ""
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await res.json()
    data.results.forEach( chars => {
        contendor.innerHTML += `<article>
        <div class="img-smalls">
            <img src="${chars.image}" alt="${chars.name}">
            <div class="card-smalls">
                <small>status:${chars.status}</small>
                <small>id${chars.id}</small>
            </div>
        </div>
        <h3>${chars.name}</h3>
        <button>ver más</button>
    </article>`
    })
}

export {getCharacters}