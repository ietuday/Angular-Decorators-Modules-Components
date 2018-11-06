interface IMovie{
    title:string;
    runtime:number;
}

function printMovieDetail(movie: IMovie){
    console.log(`Movie Title: ${movie.title} and Movie Runtime : ${movie.runtime}`);
}

function printMovieName(movie: IMovie){
    console.log(`Movie Title: ${movie.title}`);
}

printMovieDetail({title: 'The Godfather', runtime: 180});
printMovieName({title: 'The Godfather', runtime: 180});
