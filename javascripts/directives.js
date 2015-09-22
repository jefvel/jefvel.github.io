(function(){
    angular.module("app.directives")
        .directive("slidingDialog", SlidingDialog);

    function SlidingDialog(ExperienceService) {
        var open = false;
        return {
            restrict:"A",
            link:function($scope, element, model){
                $scope.$on("ClosedExperience", function(){
                    if(open){
                        open = false;
                        $(element).velocity({
                            top:"100%"
                        });
                    }
                });

                $scope.$on("OpenedExperience", function(){
                    if(!open){
                        $(element).velocity({
                            top:120
                        });

                        ExperienceService.bounceTitle();
                        open = true;
                    }
                });
            }
        };
    }
})();
