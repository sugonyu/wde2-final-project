const movies = require('../data/movies-data.js');

console.log('Movie Data Test');
console.log('---------------');
console.log('Latest movies:', movies.latest.length);
console.log('Classic movies:', movies.classics.length);
console.log('Best rated movies:', movies.rated.length);
console.log('');

console.log('Best Rated Titles:');
for (let i = 0; i < movies.rated.length; i++) {
  console.log('-', movies.rated[i].title);
}
console.log('');

const allMovies = [...movies.latest, ...movies.classics, ...movies.rated];
const randomIndex = Math.floor(Math.random() * allMovies.length);
const randomMovie = allMovies[randomIndex];

console.log('Random Movie Pick:');
console.log('Title:', randomMovie.title);
console.log('Genre:', randomMovie.genre);
console.log('Director:', randomMovie.director);
console.log('Trailer:', randomMovie.trailer);
