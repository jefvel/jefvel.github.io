(function() {
    angular.module("app.controllers")
    .controller("HomeController", HomeController)
    .controller("DetailController", DetailController);
    function HomeController($rootScope, $state, ExperienceService) {
        var cm = this;


        cm.state = $state.current;
        cm.experiences = ExperienceService.experiences;

        $rootScope.$on("$stateChangeSuccess", function(){
            if($state.current.name == "home"){
                $rootScope.$broadcast("ClosedExperience");
            }
        });
    }

    function DetailController($rootScope, $stateParams, ExperienceService){
        var cm = this;
        ExperienceService.setExperience($stateParams.experience);
    }
})();
