const addMoviesToDom = (filmdatabase) => {
  const movieList = document.getElementById("movielist");
  filmdatabase.map((movie) => {
    const listElement = document.createElement("li");
    const imdblink = document.createElement("a");
    imdblink.href = "https://www.imdb.com/title/" + movie.imdbID;
    const image = document.createElement("img");
    image.src = movie.Poster;
    imdblink.appendChild(image);
    listElement.appendChild(imdblink);  
    movieList.appendChild(listElement);
  });
};

addMoviesToDom(movies);

const removeMoviesFromDom = () => {
  const movieList = document.getElementById("movielist");
  movieList.querySelectorAll("*").forEach((n) => n.remove());
};

const filterMovies = (wordInMovieTitle) => {
  const filteredMoviesList = movies.filter((movie) => {
    if (movie.Title.includes(wordInMovieTitle)) {
      return movie;
    }
  });
  removeMoviesFromDom();
  addMoviesToDom(filteredMoviesList);
};

const filterLatestMovies = () => {
  const latestMoviesList = movies.filter((movie) => {
    if (movie.Year >= 2014) {
      return movie;
    }
  });
  removeMoviesFromDom();
  addMoviesToDom(latestMoviesList);
};

const handleOnChangeEvent = (event) => {
  switch (event.target) {
    case document.getElementById("latestmovies"):
      filterLatestMovies();
      break;
    case document.getElementById("avengers"):
      filterMovies("Avengers");
      break;
    case document.getElementById("x-men"):
      filterMovies("X-Men");
      break;
    case document.getElementById("princess"):
      filterMovies("Princess");
      break;
    case document.getElementById("batman"):
      filterMovies("Batman");
      break;
  }
};

const addEventListeners = () => {
  const radiobuttons = document.getElementsByName("filter");
  radiobuttons.forEach((button) => {
    button.addEventListener("change", handleOnChangeEvent);
  });
};

addEventListeners();
