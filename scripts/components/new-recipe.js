
angular
    .module("cookbook")
    .component("newRecipe", {
        templateUrl: "views/new-recipe.html",
        bindings: {
            $router: "<"
        },
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
                        // Old way without components
                        //$scope.recipes.push(response.data);
                        
                        // Like ngLink
                        self.$router.navigate(['MyRecipes']);
                    });
            }
        }
    });