
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
                self.newIngredient = {
                    name: "",
                    quantity: 1
                };

                // Ingredients collection
                self.ingredients = [];
            };
            
            self.pressedKey = function (event) {
                // Get key pressed
                var key = event.which || event.keyCode;

                // Check intro
                if (key === 13 && self.newIngredient.name){
                    // Insert ingredient to ingredients collection
                    self.ingredients.push(self.newIngredient);

                    // reset input
                    self.newIngredient = {
                        name: "",
                        quantity: 1
                    };
                }
            }
        }
    });