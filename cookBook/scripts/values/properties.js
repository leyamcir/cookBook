
angular
    .module("cookbook")
    .value("Properties", {
        serverUrl: "http://localhost:8000",
        endpointRecipes: "/api/recetas",
        endpointImages: "/upload"
    });