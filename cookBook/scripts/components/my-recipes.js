
angular
    .module("cookbook")
    .component("myRecipes", {
        // With 'template' / 'templateUrl' establish component view
        templateUrl: "views/my-recipes.html",

        // In 'controller', component logic is established
        controller: function (recipesService) {
            // this references context, this context is the one we need, so we save it on self var
            var self = this;

            // hook $onInit, fired when component is initialized
            self.$onInit = function () {

                /*
                // For several server petitions
                $q.all([
                    server1,
                    server2,
                    server3
                ]);
                */

                recipesService.getRecipes() // Returns a promise
                    .then(function (response) {
                        // In 'data' property it's its body
                        self.recipes = response.data;
                    });
            };
            
            // Get image absolute path
            self.getImagePath = recipesService.getImageAbsolutePath;
        }
    });



/*
 * // This would be dependency injection
 *
 * controller: ["recipesService", function (recipesService) {
 *     // ...
 * }]
 * */

/*
* // This would be the code using injection
*
 // ...
        controller: ctrl
 // ...
*
*
*
    var ctrl = function (recipesService) {
        var self = this;

        recipesService.getRecipes()
        .then(function (response) {

             self.recipes = response.data;
        });
    }

    ctrl.$inject = ["recipesService"];
*
* */