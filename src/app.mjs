import { getCharacters } from "./getCharacters.mjs";
import { searchChars } from "./searchChars.mjs";

const selectPage = document.querySelector('#page')
const search = document.querySelector('#search')
const filter = document.querySelector('#filter')

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
filter.addEventListener('change', (e)=> filter(e.target.value))
