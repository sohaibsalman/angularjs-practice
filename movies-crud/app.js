var app = angular.module("crud", []);

app.controller("moviesController", function ($scope) {
  // Create movies list
  $scope.movies = [];

  // Set visiblilty of Create button to true
  $scope.createButton = true;
  $scope.showTable = true;

  //   When create button is clicked
  $scope.create = function () {
    $scope.createForm = true;
    $scope.createButton = false;
    $scope.showTable = false;
  };

  $scope.addMovie = function () {
    var obj = {};
    obj.name = $scope.name;
    obj.genre = $scope.genre;
    obj.year = $scope.year;

    $scope.movies.push(obj);

    $scope.createForm = false;
    $scope.createButton = true;
    $scope.showTable = true;

    emptyScopeMovie();
  };

  $scope.showList = function () {
    showTable();
  };

  $scope.onDelete = function (e) {
    const movieName = e.target.value;
    const movie = $scope.movies.filter((x) => x.name === movieName)[0];
    const index = $scope.movies.indexOf(movie);

    $scope.movies.remove[index];
  };

  function showTable() {
    $scope.createButton = true;
    $scope.showTable = true;
    $scope.createForm = false;
  }

  function emptyScopeMovie() {
    $scope.name = "";
    $scope.genre = "";
    $scope.year = "";
  }
});
