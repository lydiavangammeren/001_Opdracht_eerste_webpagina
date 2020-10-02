const putMovieGenresInDOM = async () => {
  const data = await getMovieGenres();
  const genreList = document.createElement("ul");
  data.genres.forEach((element) => {
    const genreListItem = document.createElement("li");
    const movieGenre = `Genre naam: ${element.name}, id: ${element.id}`;

    // Genre + id in de DOM
    genreListItem.appendChild(document.createTextNode(movieGenre));
    genreList.appendChild(genreListItem);
  });

  const movieList = document.getElementById("myMovieList");
  movieList.appendChild(genreList);
};

putMovieGenresInDOM();

// Eerst wacht deze functie op het resultaat van de GET request van de getMovieByID met
// het id van de film Breakfast on Pluto als argument
// Dan selecteert het de paragraaf in de index.html dat een id van 'myTopMovie' heeft meegekregen
// Vervolgens plakt het de titel van Breakfast on Pluto daaraan vast. Op die manier wordt
// die titel dus in de DOM gezet

const setTopMovie = async () => {
    const data = await getMovieById("tt0411195"
    );
    const movie = data.movie_results[0];
    const topMovie = document.getElementById("myTopMovie");
    // Breakfast on Pluto
    topMovie.appendChild(document.createTextNode(movie.title));
    //console.log("testje voor Breakfast on Pluto")
  };

setTopMovie()

const setSecondMovie = async () => {
  const data = await getMovieById("tt0111161"
  );
  const movie = data.movie_results[0];
  const secondBestMovie = document.getElementById("mySecondBestMovie");
  // Breakfast on Pluto
  secondBestMovie.appendChild(document.createTextNode(movie.title));
  console.log("testje voor de second best movie")
};

setSecondMovie()

// Deze functie is nog niet helemaal goed, hij geeft nu de films met een rating hoger of 
// gelijk aan een 8.6, wat toevallig neerkomt op 10 films. Maar moet hem dus nog zo schrijven
// dat hij altijd de eerste 10 pakt
const setTopTen = async () => {
  const data = await getTopRatingMovies()
  console.log(data.results)
  ;
  const ratingList = document.createElement("ul");
  data.results.forEach((element) => {
    if (element.vote_average >= 8.6) {
    const ratingListItem = document.createElement("li");
    const movieRating = `Name: ${element.title}, id: ${element.id}`;

    
    ratingListItem.appendChild(document.createTextNode(movieRating));
    ratingList.appendChild(ratingListItem);}
  });

  const topTenList = document.getElementById("topTenRatings");
  topTenList.appendChild(ratingList);
  console.log("testje voor de top tien")
};

setTopTen()


// url voor action + sort by popularity (descending)

//https://api.themoviedb.org/3/discover/movie?api_key=46f09e2252400ef63ce7d5303d06e6dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
