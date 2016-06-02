
angular
    .module("cookbook")
    .service("recipesService", function ($http) {
        // All functionality that you want to export has to be published in this
        this.getRecipes = function () {
            /*
            return [
                {
                    name: "Sopa de pepino de mar"
                },
                {
                    name: "Tortilla de patata con espinacas"
                },
                {
                    name: "Flambeado de Moe"
                }
            ];
            */
            return $http.get("http://localhost:8000/api/recetas");
        };

        // Save recipe
        this.saveRecipe = function (recipe) {
            
            return $http.post("http://localhost:8000/api/recetas", recipe);
        }
    });