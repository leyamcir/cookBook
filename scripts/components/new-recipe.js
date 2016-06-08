
angular
    .module("cookbook")
    .component("newRecipe", {
        templateUrl: "views/new-recipe.html",
        // 'bindings' Establish component communication interface
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
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
                        // $router has data related with actual route
                        // uses navigate to redirect
                        self.$router.navigate(['MyRecipes']);
                    });
            }
        }
    });