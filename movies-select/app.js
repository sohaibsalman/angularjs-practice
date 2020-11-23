/* 
  Create an angular module. An angular module is just like a project. We can use
  this module to add different controllers and services.
*/
var myApp = angular.module("lab6", []);

/* 
  Create an angular controller that will be responsible to 
  bind (send/receive) data from the view (html file).
*/
myApp.controller("myMovie", function ($scope) {
  var moviesList = movies;
  $scope.moviesList = moviesList;

  $scope.getData = function () {
    $scope.showCast = false;

    // filter will return array
    var data = moviesList.filter(function (movie) {
      return movie.name === $scope.selectedMovie;
    });

    // get 0 element (movie object)
    var movieData = data[0];
    $scope.data = movieData;

    $scope.cast = movieData.actors;

    console.log($scope.cast);
  };

  $scope.toggleCast = function () {
    if ($scope.showCast) {
      $scope.showCast = false;
    } else {
      $scope.showCast = true;
    }
  };
});

// Array of objects for the movies
let movies = [
  {
    name: "Avengers Endgame",
    genre: "Action",
    year: "2019",
    actors: [
      { name: "Robert Downey, Jr.", role: "Iron Man" },
      { name: "Chris Hemsworth", role: "Thor" },
      { name: "Chris Evans", role: "Captain America" },
    ],
  },
  {
    name: "Justice League",
    genre: "Action/Adventure",
    year: "2017",
    award: "Oscar",
    actors: [
      { name: "Ben Affleck", role: "Batman" },
      { name: "Henry Cavill", role: "Superman" },
      { name: "Gal Gadot", role: "Wonder Woman" },
    ],
  },
  {
    name: "The Matrix",
    genre: "Sci-fi",
    year: "1999",
    actors: [
      { name: "Keanu Reeves", role: "Neo" },
      { name: "Laurence Fishburne", role: "Morpheus" },
      { name: "Carrie-Anne Moss", role: "Trinity" },
    ],
  },
];
