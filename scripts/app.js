// Module setter

angular.module("cookbook", ["ngComponentRouter"]);

// Configure provider $locationProvider.
// Stablish navigation model HTML5 for Single Page Application to work
angular.module("cookbook").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});