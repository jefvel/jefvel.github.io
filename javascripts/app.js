(function(){
    angular.module("app.controllers", []);
    angular.module("app.directives", []);
    angular.module("app.services", []);

    angular.module("app", [
        "ngAnimate",
        "ui.router",
        "app.controllers",
        "app.directives",
        "app.services"
    ]);

    angular.module("app")
    .config(States);

    function States($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url:"/"
        })

        .state("detail", {
            url:"/info/{experience}",
            templateUrl:function($stateParams){
                return "views/"+$stateParams.experience+".html";
            },
            controller:"DetailController as d"
        })
    }
})();
