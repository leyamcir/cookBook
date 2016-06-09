
angular.module("cookbook")
    .directive("newElementForm", function () {
        
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // With template or templateUrl, we indicate the hierarchy of components whom navigator will renderize as directive view
            templateUrl: "views/new-element-form.html",
            // With scope, we define communication interface between directive and parent scope (Controller / component)
            scope: {
                onButtonClick: "&" // Notify event to parent scope
            },
            // With link, we either establish directive logic or manipulate DOM in view
            link: function (scope) {

                // Create new recipe object
                scope.recipe = {
                    name: "",
                    ingredients: []
                };

                // Save button handler
                scope.notifySave = function () {
                    // Notify to parent scope
                    scope.onButtonClick(
                        {
                            recipe: scope.recipe
                        }
                    );
                };

                scope.addIngredient = function (ingredient) {
                    // Add ingredient from component to ingredients collection
                    scope.recipe.ingredients.push(ingredient);
                };

                scope.deleteIngredient = function (index) {
                    // Delete ingredient on index position
                    scope.recipe.ingredients.splice(index, 1); // splice(index, elements to delete from index)
                };

                scope.ableToSave = function () {
                    // Check if form has necessary data
                    return (scope.recipe.name &&
                        (scope.recipe.ingredients.length > 0));
                }
            }
        }
    });