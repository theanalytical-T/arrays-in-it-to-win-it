//Create an array of movies with at least three movies.
let movies = ['Jurrasic Park', 'Back to the Future', 'Alien']

//Using the array from above, store the first movie in a variable
let favorite = movies[0]
console.log(favorite)

//Get the length of the original array and store it in a new variable
let newMovies = movies.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies.pop()
//Another option let lastMovie = movies[movies.length - 1]
