// //	Q1) Create an object called person with properties name, age, and city.
//  Set appropriate values for these properties.

let person = {
  name: "Abdulaziz",
  age: "22",
  city: "Al-Zahra",
};
//Q2) Add a new key email to the person object and assign it an email address.
person.email = "abdulaziz.murad2001@gmail.com";
console.log(person);
//	Q3) Write a JavaScript function called hasKey that takes two arguments:
//  an object and a key. The function should return true if the object contains
//  the specified key, and false otherwise. For example, if the object is
//  { name: 'John', age: 25 }, and the key is 'name', the function should return true,
//  but if the key is 'city', it should return false.
function haskey(object, key) {
  if (object[key] == undefined) {
    return false;
  } else {
    return true;
  }
}

console.log(haskey(person, "major")); //major key does not exist.
console.log(haskey(person, "name")); // name exist so it should return true.
//------------------------------------------------------

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
//  Q4) Create a function that accepts an array of objects called 'movies'
// and iterates through it to print the titles of all the movies.
function movieTitle(array) {
  array.forEach((element) => {
    console.log(element.title);
  });
}
console.log(movieTitle(movies));
// Q5) Create a function that accepts an array of objects called 'movies'
// and iterates through it to count how many movies were released in the year 1994.
function year1994(array) {
  let count = 0;
  array.forEach((element) => {
    if (element.year == 1994) {
      count = count + 1;
    }
  });
  return `movies that were released in the year 1994 are: ${count} movies.`;
}

console.log(year1994(movies));

// Q6) Write a function that updates the genre of the movie "The Dark Knight"
// to "Action/Drama" and returns the modified array of movies.

function updateGenre(array) {
  array.forEach((element) => {
    if (element.title === "The Dark Knight") {
      element.genre = "Action / Drama"; // Update the genre directly
    }
  });
  return array; // Return the modified array which is (movies)
}

console.log(updateGenre(movies));
