function printMovieDetail(movie) {
    console.log("Movie Title: " + movie.title + " and Movie Runtime : " + movie.runtime);
}
function printMovieName(movie) {
    console.log("Movie Title: " + movie.title);
}
printMovieDetail({ title: 'The Godfather', runtime: 180 });
printMovieName({ title: 'The Godfather', runtime: 180 });
