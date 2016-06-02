
angular
    .module("cookbook")
    .controller("recipesList", function ($scope, recipesService) { // Better with array or inject
        // Controller shouldn't call server to get data. Better use a service

        // getRecipes() Return a promise, a handler is needed
        recipesService.getRecipes()
            .then(function (response) {
                // In 'data' property it's its body
                $scope.recipes = response.data;
                console.log($scope.recipes);
            });
        // Return a promise
        //console.log($scope.recipes);

        // Save recipe
        $scope.setRecipeName = function () {
            var recipe = {
                name: $scope.recipeName
            };

            recipesService.saveRecipe(recipe)
                .then(function (response) {

                    $scope.recipes.push(response.data);
                });
        }
    });