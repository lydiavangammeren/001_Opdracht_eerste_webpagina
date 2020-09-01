let Moonrise = {
    title: 'Moonrise Kingdom',
    duration: 120,
    stars: ['Jared Gilman', ' Kara Hayward' , ' Bruce Willis']


}

let movieInfo = function (movie) {
   return `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars}`;
}

console.log(movieInfo(Moonrise))