function movies(moviesDataArr) {
    let movies = [];

    for (let token of moviesDataArr) {
        if (token.includes('addMovie')) {
            token = token.split('addMovie ')
            let movie = {}
            movie.name = token[1]
            movies.push(movie)
        }
        else {
            if (token.includes('onDate')) {
                token = token.split(' onDate ');
                for (let movie of movies) {
                    if (movie.name === token[0]) {
                        movie.date = token[1]
                    }
                }
            } else {
                token = token.split(' directedBy ');
                for (let movie of movies) {
                    if (movie.name === token[0]) {
                        movie.director = token[1]
                    }
                }
            }


        }


    }
    for (const obj of movies) {
        if (Object.entries(obj).length === 3) {
            console.log(JSON.stringify(obj));
        }
    }
}





movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)