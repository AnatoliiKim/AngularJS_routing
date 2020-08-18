var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./templates/main.aspx"
        })
        .when("/form", {
            templateUrl: "./templates/pageWithForm.aspx"
        })
        .otherwise("/", {
            templateUrl: "./templates/main.aspx"
        });
});
