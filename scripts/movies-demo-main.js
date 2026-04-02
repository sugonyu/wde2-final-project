const movieList = document.getElementById('movieList');
const bestRatedMovies = window.movieData.rated;

for (let i = 0; i < bestRatedMovies.length; i++) {
  const movie = bestRatedMovies[i];

  const card = document.createElement('div');
  card.className = 'movie-card';

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Actors:</strong> ${movie.actors.join(', ')}</p>
    <p>${movie.description}</p>
    <a href="${movie.trailer}" target="_blank">Trailer</a>
  `;

  movieList.appendChild(card);
}
