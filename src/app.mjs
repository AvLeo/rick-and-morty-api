import { getCharacters } from "./getCharacters.mjs";

const selectPage = document.querySelector('#page')
const search = document.querySelector('#search')
const filter = document.querySelector('#filter')

selectPage.addEventListener('change', (e) => getCharacters(e.target.value))
search.addEventListener('change', (e) => searchChars(e.target.value))
filter.addEventListener('change', (e)=> filter(e.target.value))
