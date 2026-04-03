var latestMovies = window.movieData.latest;
var classicMovies = window.movieData.classics;
var ratedMovies = window.movieData.rated;

function createMovieCard(movie) {
  return '\n    <div class="card">\n      <img src="' + movie.poster + '" alt="' + movie.title + '">\n      <div class="card-content">\n        <h3 class="movie-title">' + movie.title + '</h3>\n        <p><b>Genre:</b> ' + movie.genre + '</p>\n        <p><b>Director:</b> ' + movie.director + '</p>\n        <p><b>Actors:</b> ' + movie.actors.join(', ') + '</p>\n        <p class="desc"><b>Description:</b> ' + movie.description + '</p>\n        <a href="' + movie.trailer + '" target="_blank" class="btn">Trailer</a>\n      </div>\n    </div>\n  ';
}

function showMovies(movieList, containerId) {
  var container = document.getElementById(containerId);
  var cards = '';

  for (var i = 0; i < movieList.length; i++) {
    cards = cards + createMovieCard(movieList[i]);
  }

  container.innerHTML = cards;
}

showMovies(latestMovies, 'latestContainer');
showMovies(classicMovies, 'classicContainer');
showMovies(ratedMovies, 'ratedContainer');
