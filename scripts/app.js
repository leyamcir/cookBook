// Module setter

angular.module(
    "cookbook",
    [
        "ngComponentRouter",
        "dahr.ng-image-picker"
    ]);

// Configure provider $locationProvider.
// Establish navigation model HTML5 for Single Page Application to work
angular.module("cookbook").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

// Indicate root component in '$routerRootComponent'
angular.module("cookbook").value("$routerRootComponent", "root");