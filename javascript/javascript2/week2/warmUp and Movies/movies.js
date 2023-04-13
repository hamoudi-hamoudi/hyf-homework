import { movies } from "./moviesList.js"; // the array in the moviesList.js file

// Working with movies

// movies with a short title
const shortTitleMovies = movies.filter((item) => {
  return item.title.split(" ").length < 3;
});
// movies with a long title
const longTitleMovies = movies
  .filter((item) => {
    return item.title.split(" ").length > 2;
  })
  .map((item) => item.title);

// number of movies made between 1980-1989
const periodFliter = movies.filter(
  (item) => item.year >= 1980 && item.year <= 1989
).length;

// new array that has an extra key called tag
const addMoviesTag = movies.map((item) => {
  if (item.rating < 4) {
    item.tag = "Bad";
  } else if (item.rating >= 4 && item.rating < 7) {
    item.tag = "Average";
  } else if (item.rating >= 7) {
    item.tag = "Good";
  }
  return item;
});
// rating of the movies
const moviesRating = movies
  .filter((item) => item.rating > 6)
  .map((item) => item.rating);

// Count the total number of movies containing specific keywords
const keyWords = ["Benjamin", "Alien", "Surfer"];
const specificKeywordsCount = movies.filter((item) => {
  const singleWordTitle = item.title.toLowerCase().split(" ");
  const movieTitles = keyWords.some((item) =>
    singleWordTitle.includes(item.toLocaleLowerCase())
  );
  return movieTitles;
}).length;

// title is duplicated
const titleSplit = movies.filter((movie) => {
  const { title } = movie;
  const titleWords = title.toLowerCase().split(" ");
  const uniquElements = new Set(titleWords); // counstracture that return array without deplucated words
  return uniquElements.size !== titleWords.length;
});

console.log(titleSplit);
// average rating

const averageRating = (
  movies.reduce((total, item) => item.rating + total, 0) / movies.length
).toFixed(2);

// total number of Rating

const ratingCount = movies.reduce(
  (total, item) => {
    if (item.tag === "Good") {
      total.goodmovies++;
    } else if (item.tag === "Average") {
      total.averageMovies++;
    } else if (item.tag === "Bad") {
      total.badmovies++;
    }
    return total;
  },
  { goodmovies: 0, averageMovies: 0, badmovies: 0 }
);

console.log(ratingCount);
