
angular
    .module("cookbook")
    .component("root", {
        $routeConfig: [{
            name: "MyRecipes",
            path: "/my-recipes",
            component: "myRecipes"
        },{
            name: "NewRecipe",
            path: "/new-recipe",
            component: "newRecipe"
        }],
        templateUrl: "views/root.html"
    });