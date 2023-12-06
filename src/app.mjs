import { getCharacters } from "./Characters/getCharacters.mjs";
import { searchChars } from "./Characters/searchChars.mjs";
import { filterChars } from "./Characters/filterChars.mjs"
import { getEpisodes } from "./episodes/getEpisodes.mjs";
import { getLocation } from "./location/getLocation.mjs";

const selectPage = document.querySelector('#page')
const search = document.querySelector('#search')
const filter = document.querySelector('#filter')
const btnEpisodes = document.querySelector('#episodes')
const btnLocation = document.querySelector('#location')

selectPage.addEventListener('change', (e) => getCharacters(e.target.value))
search.addEventListener('blur', (e) => {
    if(e.target.value !== ""){
        searchChars(e.target.value)
    }
})

search.addEventListener('keydown', (e) => {
    if(e.key === "Enter" && e.target.value !== ""){
        searchChars(e.target.value)
    }
})

filter.addEventListener('change', (e)=> filterChars(e.target.value))

btnEpisodes.addEventListener('click', () => getEpisodes())

btnLocation.addEventListener('click', () => getLocation())