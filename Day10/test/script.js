const API_KEY = "YOUR_TMDB_API_KEY";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

async function fetchMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
}

function displayMovies(movies) {
  const movieContainer = document.getElementById("movies");
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.vote_average}</p>
        `;
    movieContainer.appendChild(movieCard);
  });
}

function searchMovies() {
  const query = document.getElementById("search").value;
  if (!query) return;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  fetchMovies(SEARCH_URL);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies(API_URL);
});
