var app = angular.module("app", ["ngRoute"]);

app
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./routesTemplates/main.aspx"
    })
    .when("/form", {
        templateUrl : "./routesTemplates/pageWithForm.aspx"
    })
})
.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        var script = document.createElement("script");
        script.type = "text/javascript";                
        var src = elem.attr('src');

        if (src!==undefined)
        {
            script.src = src;
        }
        else
        {
            var code = elem.text();
            script.text = code;
        }

        document.head.appendChild(script);
        elem.remove();
      }
    };
  });