
angular
    .module("cookbook")
    .service("recipesService", function ($http, Properties) {
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
            return $http.get(Properties.serverUrl + Properties.endpointRecipes);
        };

        // Save recipe
        this.saveRecipe = function (recipe, image) {

            var promise;

            if (image) {
                // Image exists
                // Create 'FormData' (standard HTML5) with image
                var data = new FormData();
                data.append("image", image);

                // Configure request 'Content-Type' as undefined (so Angular.js will infer request type)
                var configuration = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };

                // Upload image to server
                promise = $http.post(
                    Properties.serverUrl + Properties.endpointImages,
                    data,
                    configuration
                )
                .then(function (response) {
                    // Server returns json, with uploaded file relative path
                    var path = response.data.path;

                    // Establish img path before saving
                    recipe.imagePath = path;

                    return $http.post(Properties.serverUrl + Properties.endpointRecipes, recipe);
                });

            } else {
                // Image undefined
                promise = $http.post(Properties.serverUrl + Properties.endpointRecipes, recipe);
            }
            return promise;
        };

        this.getImageAbsolutePath = function (relativePath) {
            return (relativePath)
                ? ("http://localhost:8000/" + relativePath)
                : undefined;
        };
    });