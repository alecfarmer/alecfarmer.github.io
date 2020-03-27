async function showmovies() {
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let moviesSection = document.getElementById("movie-section");
    
    //loop through the movies
    for(i in moviesJSON) {
        let movie = moviesJSON[i];
        moviesSection.append(getmovieItems(movie));
    }
}

function getmovieItems(movie) {
    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");
    movieSection.classList.add("flex");

    let innerSection = document.createElement("section");
    innerSection.classList.add("innerMovie");
    movieSection.append(innerSection);

    movieSection.append(getMovieImage(movie));

    innerSection.append(getMovieTitle(movie));

    innerSection.append(getMovieDirector(movie));

    innerSection.append(getMovieActors(movie));

    innerSection.append(getMovieYear(movie));

    innerSection.append(getMovieGenres(movie));

    innerSection.append(getMovieDescription(movie));

    innerSection.append(getMovieTrailer(movie));


    return movieSection;
}

function getMovieImage(movie) {
    let image = document.createElement("img");
    image.classList.add("movieImage");
    image.classList.add("zoom");
    image.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    return image;
}

function getMovieTitle(movie) {
    let title = document.createElement("h3");
    title.innerText = movie.title;
    return title;
}

function getMovieDirector(movie) {
    let director = document.createElement("p");
    director.innerHTML += `<strong>Director</strong> ${movie.director}`;
    return director;
}

function getMovieActors(movie) {
    let director = document.createElement("p");
    director.innerHTML += `<strong>Actors</strong> `;
    for(i in movie.actors) {
        director.innerHTML += `${movie.actors[i]}, `;
    }
    return director;
}

function getMovieYear(movie) {
    let director = document.createElement("p");
    director.innerHTML += `<strong>Year Released</strong> ${movie.year}`;
    return director;
}

function getMovieGenres(movie) {
    let director = document.createElement("p");
    director.innerHTML = `<strong>Genres</strong> `;
    for(i in movie.genres) {
        director.innerHTML += `${movie.genres[i]}, `;
    }
    return director;
}

function getMovieDescription(movie) {
    let director = document.createElement("p");
    director.innerHTML += `${movie.description}`;
    return director;
}

function getMovieTrailer(movie) {
    let trailer = document.createElement("button");
    trailer.classList.add("tButton");
    trailer.innerHTML = `Click for trailer`
    trailer.onclick  = function () {
        location.href = `https://www.youtube.com/results?search_query=${movie.title} trailer`; };
    return trailer;
}

window.onload = function(){
    this.showmovies();
}