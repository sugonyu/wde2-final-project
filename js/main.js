function createImg(movie){
  const img = document.createElement('img');
  img.src = movie.poster;
  img.alt = movie.title;

  return img;
}

function createTitle(movie){
  const title = document.createElement('h3');
  title.className = "movie-title";
  title.textContent = movie.title;

  return title;
}

function createGenre(movie){
  const genre = document.createElement('p');
  genre.textContent = movie.genre.join(" / ");

  const g = document.createElement('b');
  g.textContent = "Genre: ";
  genre.prepend(g);

  return genre;
}

function createDirector(movie){
  const director = document.createElement('p');
  const directors = movie.director.length > 1 ? movie.director.join(", ") : movie.director[0];
  director.textContent = directors;
  
  const d = document.createElement('b');
  d.textContent = "Director: ";
  director.prepend(d);

  return director;
}

function createActors(movie){
  const actors = document.createElement('p');
  actors.textContent = movie.actors.join(", ");

  const a = document.createElement('b');
  a.textContent = "Actors: ";
  actors.prepend(a);

  return actors;
}

function createDescription(movie){
  const description = document.createElement('p');
  description.className = "desc";
  description.textContent = movie.description;

  return description;
}

function createTrailer(movie){
  const trailer = document.createElement('a');
  trailer.className = "btn";
  trailer.href = movie.trailer;
  trailer.target = "_blank";
  trailer.textContent = "Trailer";

  return trailer;
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = "card";

  const img = createImg(movie);
  
  const content = document.createElement('div');
  content.className = "card-content";

  card.append(img, content);
  
  const title = createTitle(movie);
  const genre = createGenre(movie);
  const director = createDirector(movie);
  const actors = createActors(movie);
  const description = createDescription(movie);
  const trailer = createTrailer(movie);

  content.append(title, genre, director, actors, description, trailer);
  
  return card;
}

function showMovies(movieList, containerId) {
  const container = document.getElementById(containerId);

  for (const movie of movieList) {
    const card = createMovieCard(movie);

    container.append(card);
  }
}

function main(){
  const latestMovies = window.movieData.latest;
  const classicMovies = window.movieData.classics;
  const ratedMovies = window.movieData.rated;

  showMovies(latestMovies, 'latestContainer');
  showMovies(classicMovies, 'classicContainer');
  showMovies(ratedMovies, 'ratedContainer');
}

main();

