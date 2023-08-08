const getCharacters =async (page) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    const res =await fetch(url)
    const data =await res.json();
    const main = document.querySelector('main')
    main.innerHTML = ''
    data.results.map( item => {
        let article = document.createElement('article')
        article.innerHTML = `
    <div class="img-container">
    <img src=${item.image} alt=${item.name}>
    </div>
    <div class="info-cards">
        <div class="name-estado">
            <p>
                <strong>${item.name}</strong>
            </p>
            <p>${item.status}</p>
        </div>
        <div class="more-info">
            <div class="genero-especie">
                <div class="especie">
                    <img src="./src/img/icons8-punto-24.png" alt="">
                    <p>${item.species}</p>
                </div>
                <div class="genero">
                    <img src="./src/img/icons8-gender-equality-24.png" alt="">
                    <p>${item.gender}</p>
                </div>
            </div>
            <div class="locacion-id">
            <div class="id">
            <img src="./src/img/icons8-hashtag-24.png" alt="">
            <p>${item.id}</p>
            </div>
            </div>
            </div>
            </div>
            `
        main.appendChild(article)
    });
}
/*           CHAT-GPT             */
const status = async (filter) => {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Limpiar contenido anterior

    for (let i = 1; i <= 42; i++) {
        const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
        const res = await fetch(url);
        const data = await res.json();

        const filteredResults = data.results.filter(item => item.status === filter);

        filteredResults.forEach(item => {
            let article = document.createElement('article');
            article.innerHTML = `
                <div class="img-container">
                    <img src=${item.image} alt=${item.name}>
                </div>
                <div class="info-cards">
                    <div class="name-estado">
                        <p><strong>${item.name}</strong></p>
                        <p>${item.status}</p>
                    </div>
                    <div class="more-info">
                        <div class="genero-especie">
                            <div class="especie">
                                <img src="./src/img/icons8-punto-24.png" alt="">
                                <p>${item.species}</p>
                            </div>
                            <div class="genero">
                                <img src="./src/img/icons8-gender-equality-24.png" alt="">
                                <p>${item.gender}</p>
                            </div>
                        </div>
                        <div class="locacion-id">
                            <div class="id">
                                <img src="./src/img/icons8-hashtag-24.png" alt="">
                                <p>${item.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            main.appendChild(article);
        });
    }
}


/*          YO             */
// const status = async (filter)=> {
//     let allResults = []
//     for (let i = 1; i <= 42; i++) {
//         const url = `https://rickandmortyapi.com/api/character/?page=${i}`
//         const res =await fetch(url)
//         const data =await res.json();
//         allResults = allResults.concat(data.results)
//         console.log(url)
//     }
    
//     const main = document.querySelector('main')
//     main.innerHTML = ''
//     const filtro = allResults.filter(item => item.status === filter)
    
//     filtro.map( item => {
//         let article = document.createElement('article')
//         article.innerHTML = `
//     <div class="img-container">
//     <img src=${item.image} alt=${item.name}>
//     </div>
//     <div class="info-cards">
//         <div class="name-estado">
//             <p>
//                 <strong>${item.name}</strong>
//             </p>
//             <p>${item.status}</p>
//         </div>
//         <div class="more-info">
//             <div class="genero-especie">
//                 <div class="especie">
//                     <img src="./src/img/icons8-punto-24.png" alt="">
//                     <p>${item.species}</p>
//                 </div>
//                 <div class="genero">
//                     <img src="./src/img/icons8-gender-equality-24.png" alt="">
//                     <p>${item.gender}</p>
//                 </div>
//             </div>
//             <div class="locacion-id">
//             <div class="id">
//             <img src="./src/img/icons8-hashtag-24.png" alt="">
//             <p>${item.id}</p>
//             </div>
//         </div>
//         </div>
//         </div>
//             `
//         main.appendChild(article)
//     })
// }
    
    
    getCharacters(1)
    // <div class="locacion">
    //     <img src="./src/img/icons8-geo-cerca-24.png" alt="">
    //     <p>${item.location.name}</p>
    // </div>
