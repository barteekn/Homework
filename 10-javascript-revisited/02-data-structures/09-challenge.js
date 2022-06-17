// Challenge 9 - Recenzje filmowe

const movieList = [
  {
    id: 1,
    movieId: 1,
    rating: 4,
    title: "The Batman 2022"
  },
  {
    id: 2,
    movieId: 2,
    rating: 10,
    title: "Avengers: Endgame"
  },
  {
    id: 3,
    movieId: 3,
    rating: 9,
    title: "Avengers: Infinity War",
  },
  {
    id: 4,
    movieId: 4,
    rating: 8,
    title: "Black Panther"
  },
  {
    id: 5,
    movieId: 5,
    rating: 7,
    title: "Doctor Strange",
  },
];

const reviewList = [
  {
    id: 1,
    movieId: 1,
    content: "I liked it!",
  },
  {
    id: 2,
    movieId: 2,
    content: "It was AWESOME!",
  },
  {
    id: 3,
    movieId: 3,
    content: "It was GREAT!",
  },
  {
    id: 4,
    movieId: 4,
    content: "One of the best movies!",
  },
  {
    id: 5,
    movieId: 5,
    content: "A plesent movie!",
  },
];

function organizeMovieReviews (movieList, reviewList) {
  let result = [];
  for (let i = 0; i < movieList.length; i++) {
    let movie = movieList[i];
    let reviews = reviewList.filter(review => review.movieId === movie.movieId);
    movie.reviews = reviews;
    result.push(movie);
  }
  return result;
};

console.log(organizeMovieReviews(movieList, reviewList));