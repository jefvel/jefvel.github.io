(function() {
    angular.module("app.services")
        .factory("ExperienceService", ExperienceService);

    function ExperienceService($rootScope, $state){
        var cm = this;

        var WORK = "work";
        var GAME = "game";
        var OTHER = "other";

        var Experience = function(title, view, category, previewimage) {
            var t = this;
            t.title = title;
            t.view = view;
            t.category = category;
            t.previewImage = previewimage;
        }

        cm.experiences = [
            new Experience("Bachelor's degree at LTU - Computer Game Development (2011 - 2014)", null, WORK),
            new Experience("Explizit (2015)", "explizit", WORK,
                  "http://i.imgur.com/CKNumqt.png" ),
            new Experience("Please Feed Grandpa (2016)", "grandpa", GAME,
                    "http://i.imgur.com/O44EzaE.png"),
            new Experience("Drillgame (2015)", "drillgame", GAME,
                    "http://i.imgur.com/v8ys3VQ.png"),
            new Experience("Burngame (2014)", "burngame", GAME,
                    "http://i.imgur.com/v0Gynma.png"),
            new Experience("Older Projects", "older", OTHER,
                    "http://i.imgur.com/nurRSBO.png"),
        ];

        cm.setExperience = function(key) {
            var cur = null;
            var prev = null;
            var next = null;

            cm.experiences.every(function(e){
                if(e.view == null) {
                    return true;
                }

                if(cur != null){
                    next = e;
                    return false;
                }

                if(e.view == key){
                    cur = e;
                }else{
                    prev = e;
                }

                return true;
            });

            $rootScope.currentExperience = cur;
            $rootScope.nextExperience = next;
            $rootScope.previousExperience = prev;

            $rootScope.$broadcast("OpenedExperience");
        }

        cm.showExperience = function(experience) {
            cm.currentExperience = experience;
            cm.bounceTitle();
            $state.go("detail");
        }

        cm.bounceTitle = function() {
            var speed = 0.6;
            var s2 = 2.5;

            $("#project-title").velocity("stop").velocity({
                translateY: -30,
                rotateZ:5
            }, {delay:300, duration:250 * speed})
            .velocity({
                translateY:0,
                rotateZ:-4
            }, 625 * speed * s2, [500 * speed * s2, 20 * speed * s2])
            .velocity({
                rotateZ:0
            }, 500);

            var topt = 90;
            if(window.innerWidth < 560){
                topt = 73;
            }

            $(".poke-arm").velocity("stop").velocity({translateY:topt, rotateZ:4}, {duration:300, delay:1000})
                .velocity({translateY:0, rotateZ:0}, {duration:400, delay:700});

            $(".poke-arm .fingers").velocity("stop").velocity({rotateZ:-5, scale:0.8}, {duration:200, delay:1300})
                .velocity({scale:1, rotateZ:0}, {duration:100, delay:500});
        }

        return cm;
    }
})();
