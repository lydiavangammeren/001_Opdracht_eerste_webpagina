//1. genre Movielist
//Variables

const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
const API_KEY = "46f09e2252400ef63ce7d5303d06e6dc";
const movieGenreList = `${apiUrl}?api_key=${API_KEY}`;
//console.log(movieGenreList)
//async functie om genres op te vragen
const getMovieGenres = async () => {
  try {
    const response = await fetch(movieGenreList, { method: "GET" }) //fetch haalt data op bij het adres movieGenreList
      .then((result) => result.json()); //zet de data(result) om naar json object
    console.log(response); //array in json object
    return response;
  } catch (error) {
    console.log(error);
  }
};

// roep de functie getMovieGenres aan:
//getMovieGenres()

//2. top-rating Movielist
const apiUrlforRatings = "https://api.themoviedb.org/3/movie/top_rated?";
const movieRatingList = `${apiUrlforRatings}api_key=${API_KEY}`;
const getTopRatingMovies = async () => {
  try {
    const response = await fetch(movieRatingList, { method: "GET" }) //fetch haalt data op bij het adres movieRatingList
      .then((result) => result.json()); //zet de data(result) om naar json object
    console.log(response); //array in json object
    return response;
  } catch (error) {
    console.log(error);
  }
};

getTopRatingMovies()


// De getMovieByID functie stuurt een GET request naar de url die gedefineerd is in 
// movieByIDEndpoint. Het maakt van het resultaat een json bestandtype

const getMovieById = async movieId => {
    const base_endpoint = "https://api.themoviedb.org/3"
    const API_KEY = "46f09e2252400ef63ce7d5303d06e6dc";
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?&api_key=${API_KEY}&external_source=imdb_id`;
    //console.log(movieByIDEndpoint);
    try {
      const res = await fetch(movieByIDEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
