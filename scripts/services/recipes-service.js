
angular
    .module("cookbook")
    .service("recipesService", function () {
        // All functionality that you want to export has to be published in this
        this.getRecipes = function () {
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
        };
    });