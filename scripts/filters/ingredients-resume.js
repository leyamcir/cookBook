
angular
    .module("cookbook")
    .filter("IngredientsResume", function () {
        return function (ingredients) {
            // Ensure ingredients is a collection
            ingredients = ingredients || [];

            // Iterate ingredients collection to get from each a string,
            // indicating ingredient (cant gr-)
            var collection = ingredients.reduce(function (accumulated, ingredient) {
                var text = ingredient.name + " (" + ingredient.quantity + " gr.)";
                accumulated.push(text);
                return accumulated;
            },
            []);

            return collection.join(", ");
        };
    });