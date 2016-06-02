
angular
    .module("cookbook")
    .controller("recipesList", function ($scope, recipesService) { // Better with array or inject
        // Controller shouldn't call server to get data. Better use a service
        $scope.recipes = recipesService.getRecipes();
    });