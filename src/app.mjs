import { getCharacters } from "./Characters/getCharacters.mjs";
import { searchChars } from "./Characters/searchChars.mjs";
import { filterChars } from "./Characters/filterChars.mjs"
import { getEpisodes } from "./episodes/getEpisodes.mjs";
import { getLocation } from "./location/getLocation.mjs";
import { filterEpisodes } from "./episodes/filterEpisodes.mjs";
import { searchEpisodes } from "./episodes/searchEpisodes.mjs"
import { filterLocation } from "./location/filterLocation.mjs"
import { searchLocation } from "./location/searchLocation.mjs"

const selectPage = document.querySelector('#page')
const search = document.querySelector('#search')
const filter = document.querySelector('#filter')
const btnEpisodes = document.querySelector('#episodes')
const btnLocation = document.querySelector('#location')
const btnCharacters = document.querySelector('#characters')
// const smallSearch = document.querySelector('#small-input')

const optionsEpisodes = ["S01","S02","S03","S04","S05"]
const optionsCharacters = ["Alive", "Dead", "unknown"]
let optionsLocations = []

let state = ""

const getTypeLocation =async () => {
    for (let i = 1; i <= 7; i++) {
        const res =await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        const data =await res.json()
        data.results.forEach( location => {
            if(!optionsLocations.includes(location.type) && location.type !== ""){
                optionsLocations.push(location.type)
            }
        })
    }
}

getTypeLocation()


const addOptions = (pages, options) =>{ 
    selectPage.innerHTML = "<option selected disabled >Pagina</option>"
    for (let i = 1; i <= pages; i++) {
        selectPage.innerHTML += `<option value="${i}">${i}</option>`
    }
    filter.innerHTML = "<option selected disabled >Filtro</option>"
    for (let i = 0; i < options.length; i++) {
        filter.innerHTML += `<option value="${options[i]}">${options[i]}</option>`
    }
}

const statePage = (inPage, pageTwo, pageThree) => {
    if(!document.querySelector(`#${inPage}.statePage`)) document.querySelector(`#${inPage}`).classList.add('statePage')
    if(document.querySelector(`#${pageTwo}`))  document.querySelector(`#${pageTwo}`).classList.remove('statePage')  
    if(document.querySelector(`#${pageThree}`))  document.querySelector(`#${pageThree}`).classList.remove('statePage')
}


selectPage.addEventListener('change', (e) => {
    if(state === "episodes"){
        getEpisodes(e.target.value)
    }else if(state === "location"){
        getLocation(e.target.value)
    }else{
        getCharacters(e.target.value)
    }

})


const searchValue = (value) =>{
    if(state === "episodes"){
        searchEpisodes(value)
    }else if(state === "location"){
        searchLocation(value)
    }else{
        searchChars(value)
    }
}

search.addEventListener('blur', (e) => {
    if(e.target.value !== ""){
        searchValue(e.target.value)
    }
})

search.addEventListener('keydown', (e) => {
    if(e.key === "Enter" && e.target.value !== ""){
        searchValue(e.target.value)
    }
})

filter.addEventListener('change', (e)=> {
    if(state === "episodes"){
        filterEpisodes(e.target.value)
    }else if(state === "location"){
        filterLocation(e.target.value)
    }else{
        filterChars(e.target.value)
    }
})

btnEpisodes.addEventListener('click',async () => {
    state = "episodes"
    // smallSearch.innerHTML = "(nombre de episodio)"
    addOptions(3,optionsEpisodes)
    getEpisodes(1)
    statePage('episodes','characters','location')
})
btnCharacters.addEventListener('click', () => {
    state = "characters"
    // smallSearch.innerHTML = "(nombre de personaje)"
    addOptions(42, optionsCharacters)
    getCharacters(1)
    statePage('characters','location','episodes')
})

btnLocation.addEventListener('click', () => {
    state = "location"
    // smallSearch.innerHTML = "(nombre de lugar)"
    addOptions(7,optionsLocations)
    getLocation(1)
    statePage('location','episodes','characters')
})

document.addEventListener('DOMContentLoaded', () => {
    addOptions(42, optionsCharacters)
    getCharacters(1)   
})