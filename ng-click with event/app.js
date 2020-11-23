var app = angular.module("myApp", []);
app.controller("moviesController", function ($scope) {
  /* 
  This function will be called each time whenever a movie is selected
  from the bootstrap dropdown.
  */
  $scope.dropdown = function (event) {
    /* 
        Whenever ng-click directive is executed, it passes an object
        called event. This event contains the information about the 
        item that was clicked. We can get the value of the link selected
        by following code:
      */
    var selectedMovie = event.target.innerHTML;
    /*
        In the above code, event is the whole dropdown and target is the 
        item that was clicked. We can get the value written between the 
        html tags by using 'innerHTML'
      */

    $scope.movieName = selectedMovie;
  };
});
