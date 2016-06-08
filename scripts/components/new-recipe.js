
angular
    .module("cookbook")
    .component("newRecipe", {
        templateUrl: "views/new-recipe.html",
        controller: function (recipesService) {
            // Save component reference
            var self = this;

            // Save recipe
            self.saveRecipe = function (text) {
                var recipe = {
                    name: text
                };

                recipesService.saveRecipe(recipe)
                    .then(function (response) {
                        //$scope.recipes.push(response.data);
                    });
            }
        }
    });