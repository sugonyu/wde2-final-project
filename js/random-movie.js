var randomButton = document.getElementById('randomBtn');
var movieModal = document.getElementById('movieModal');
var closeButton = document.getElementById('closeBtn');
var closeModal = document.getElementById('closeModal');

var modalPoster = document.getElementById('modalPoster');
var modalTitle = document.getElementById('modalTitle');
var modalDescription = document.getElementById('modaldescription');
var modalTrailer = document.getElementById('modalTrailer');

var allMovies = [];

allMovies = allMovies.concat(window.movieData.latest);
allMovies = allMovies.concat(window.movieData.classics);
allMovies = allMovies.concat(window.movieData.rated);

function getYoutubeEmbedLink(link) {
  if (link.indexOf('watch?v=') !== -1) {
    return link.replace('watch?v=', 'embed/');
  }

  if (link.indexOf('youtu.be/') !== -1) {
    return link.replace('youtu.be/', 'www.youtube.com/embed/');
  }

  return link;
}

function showRandomMovie() {
  var randomIndex = Math.floor(Math.random() * allMovies.length);
  var movie = allMovies[randomIndex];

  modalPoster.src = movie.poster;
  modalPoster.alt = movie.title;
  modalTitle.textContent = movie.title;
  modalDescription.textContent = movie.description;
  modalTrailer.src = getYoutubeEmbedLink(movie.trailer);

  movieModal.classList.add('active');
}

function hideModal() {
  movieModal.classList.remove('active');
  modalTrailer.src = '';
}

randomButton.addEventListener('click', showRandomMovie);
closeButton.addEventListener('click', hideModal);
closeModal.addEventListener('click', hideModal);
