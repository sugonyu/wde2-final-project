function getYoutubeEmbedLink(link) {
  if (link.indexOf('watch?v=') !== -1) {
    return link.replace('watch?v=', 'embed/');
  }

  if (link.indexOf('youtu.be/') !== -1) {
    return link.replace('youtu.be/', 'www.youtube.com/embed/');
  }

  return link;
}

function showRandomMovie(modalPoster, modalTitle, modalDescription, modalTrailer, movieModal, allMovies) {

  const randomIndex = Math.floor(Math.random() * allMovies.length);
  const movie = allMovies[randomIndex];

  modalPoster.src = movie.poster;
  modalPoster.alt = movie.title;
  modalTitle.textContent = movie.title;
  modalDescription.textContent = movie.description;
  modalTrailer.src = getYoutubeEmbedLink(movie.trailer);

  movieModal.classList.add('active');
  document.body.classList.add('noScroll');
}

function hideModal() {
  movieModal.classList.remove('active');
  modalTrailer.src = '';

  document.body.className = '';
}

function createPopcorn(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const originX = rect.left + rect.width / 2 + window.scrollX;
  const originY = rect.top + rect.height / 2 + window.scrollY;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      for(let j = 0; j< 10; j++){
        
        const pop = document.createElement("span");

				pop.classList.add("popcorn");
				pop.style.position ="absolute";
				const size = Math.random() * 50 + 20;
				pop.style.width = size + "px";
				pop.style.height= size + "px";
				pop.style.left= originX - size / 2 + "px";
				pop.style.top = originY - size / 2 + "px";
				const x = (Math.random() - 0.5) * 400 + "px";
				const y = (Math.random() - 0.8) * 400 + "px";

				pop.style.setProperty("--x", x);
				pop.style.setProperty("--y", y);
				
        document.querySelector("body").appendChild(pop);
				setTimeout(() => pop.remove(), 800);
      }
    }, i * (50 + Math.random() * 10));
  }
}

function randomMovie(){
  const randomButton = document.getElementById('randomBtn');
  const movieModal = document.getElementById('movieModal');
  const closeButton = document.getElementById('closeBtn');
  const closeModal = document.getElementById('closeModal');

  const topFlap = document.querySelector(".clap-top");

  const modalPoster = document.getElementById('modalPoster');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modaldescription');
  const modalTrailer = document.getElementById('modalTrailer');

  const allMovies = [];

  allMovies.push(...window.movieData.latest);
  allMovies.push(...window.movieData.classics);
  allMovies.push(...window.movieData.rated);

  randomButton.addEventListener('click', (event) => {
    topFlap.style.transform = "rotate(-40deg)";
		setTimeout(() => topFlap.style.transform = "rotate(0deg)", 500);

    createPopcorn(event);

    setTimeout(() => {
      showRandomMovie(modalPoster, modalTitle, modalDescription, modalTrailer, movieModal, allMovies)
    }, 1000);
  });
  
  closeButton.addEventListener('click', hideModal);
  closeModal.addEventListener('click', hideModal);
}

randomMovie();


