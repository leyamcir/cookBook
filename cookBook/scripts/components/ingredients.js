
angular
    .module("cookbook")
    .component("ingredients", {
        bindings: {
            ingredients: "<",
            newIngredient: "&",
            deleteIngredient: "&"
        },
        templateUrl: "views/ingredients.html",
        controller: function () {
            var self = this;

            // Initialize component default values
            self.$onInit = function () {

                // newIngredient object
                self.ingredient = {
                    name: "",
                    quantity: 1
                };

            };
            
            self.pressedKey = function (event) {
                // Get key pressed
                var key = event.which || event.keyCode;

                // Check intro, ingredient has name and its not added yet
                if (key === 13 &&
                    self.ingredient.name &&
                    !ingredientExists(self.ingredient.name)){
                    // Insert ingredient to ingredients collection
                    //self.ingredients.push(self.newIngredient);
                    // Not the right place to add or delete elements

                    // Instead, notify new ingredient
                    self.newIngredient({
                        "ingredient": self.ingredient
                    });

                    // reset input
                    self.ingredient = {
                        name: "",
                        quantity: 1
                    };
                }
            };

            self.notifyDelete = function (index) {
                // Notify delete element index pressed
                self.deleteIngredient({
                    "index": index
                })
            };

            function ingredientExists(ingredientName) {
                var minusName = ingredientName.toLowerCase();

                var coincidences = self.ingredients.filter(function (ingredient) {
                    return (ingredient.name.toLowerCase() === minusName);
                });

                return (coincidences.length > 0);
            }
        }
    });