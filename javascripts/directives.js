(function(){
    angular.module("app.directives")
    .directive("slidingDialog", SlidingDialog)
    .directive("onEscape", OnEscape);

    function SlidingDialog(ExperienceService, $state) {
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
                            top:-10
                        }).velocity({top:0}, [1.6, 0.9]);

                        ExperienceService.bounceTitle();
                        open = true;
                    }
                });

                $scope.closeDialog = function() {
                    $state.go("home");
                }
            }
        };
    }

    function OnEscape(){
        return {
            restrict:"A",
            scope: {
                onEscape: "&"
            },
            link: function($scope, $element, $model){
                $(document.body).bind("keypress keydown", function(event) {
                    if(event.keyCode != 27) {
                        return;
                    }

                    $scope.$apply(function() {
                        $scope.$eval($scope.onEscape, {"event": event});
                    });

                    event.preventDefault();
                });
            }
        };
    }
})();
