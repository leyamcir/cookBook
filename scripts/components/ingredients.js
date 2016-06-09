
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

                // Check intro
                if (key === 13 && self.ingredient.name){
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
            }
        }
    });