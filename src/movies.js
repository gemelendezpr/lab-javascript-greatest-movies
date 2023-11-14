// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) {
        return 0;
      }
    
    const totalScore = moviesArray.reduce((sum, movie) => {
        return sum + (movie.score || 0); // Add the movie score, or 0 if undefined
      }, 0);
    
    const averageScore = totalScore / moviesArray.length;
      return parseFloat(averageScore.toFixed(2)); // Round to 2 decimal places and convert to a number
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const totalScore = dramaMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = totalScore / dramaMovies.length;
  
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
     // Create a shallow copy of the array to avoid mutating the original
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    // Compare the release years
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    // If the release years are the same, compare the titles alphabetically
    return a.title.localeCompare(b.title);
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray];

    // Sort the array alphabetically by title
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  
    // Extract the titles and return only the first 20
    const titles = sortedMovies.slice(0, 20).map(movie => movie.title);
  
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
     // Create a deep copy of the array to avoid mutating the original
  const transformedMovies = JSON.parse(JSON.stringify(moviesArray));

  // Helper function to convert 'h' and 'min' to minutes
  function convertToMinutes(duration) {
    const [hours, minutes] = duration.split('h').map(part => parseInt(part));
    return hours * 60 + (minutes || 0);
  }

  // Map over the array and update the duration property for each movie
  transformedMovies.forEach(movie => {
    movie.duration = convertToMinutes(movie.duration);
  });

  return transformedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
    
      const movieAverageScoreByYear = moviesArray.reduce((accumulator, movie) => {
        const yearOfMovie = movie.year;
        const scoreOfMovie = movie.score;
    
        if (typeof accumulator[yearOfMovie] === 'undefined') {
          accumulator[yearOfMovie] = [scoreOfMovie];
        } else {
          accumulator[yearOfMovie].push(scoreOfMovie);
        }
    
        return accumulator;
      }, {});
    
      for (let year in movieAverageScoreByYear) {
        const averageScoreOfYear = movieAverageScoreByYear[year].reduce(
          (accumulator, score, index, originalArray) =>
            accumulator + score / originalArray.length,
          0
        );
        movieAverageScoreByYear[year] = averageScoreOfYear;
      }
    
      const auxiliaryArray = Object.entries(movieAverageScoreByYear);
    
      auxiliaryArray.sort((a, b) => {
        const scoreOfYearA = a[1];
        const scoreOfYearB = b[1];
        if (scoreOfYearA > scoreOfYearB) {
          return -1;
        } else {
          return 1;
        }
      });
    
      const year = auxiliaryArray[0][0];
      const score = auxiliaryArray[0][1];
    
      return `The best year was ${year} with an average score of ${score}`;
    };
    
   