const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f6df6e36860790223c632a2a10035ba&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f6df6e36860790223c632a2a10035ba&query="';

// Get initial movies

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results);
}