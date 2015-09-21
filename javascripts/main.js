(function(){
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");

    document.write(
            unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")
            );

    try {
        var pageTracker = _gat._getTracker("UA-58949040-1");
        pageTracker._trackPageview();
    } catch(err) {}

    // Email.js version 5
    var tld_ = new Array();
    tld_[0] = "com";
    var m_ = "mailto:";
    var a_ = "@";
    var d_ = ".";

    function mail(name, dom, tl, params){
        var s = e(name,dom,tl);
        document.write('<a href="'+m_+s+params+'">'+s+'</a>');
    }

    function mail2(name, dom, tl, params, display){
        document.write('<a href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
    }

    function e(name, dom, tl){
        var s = name+a_;
        if (tl!=-2)
        {
            s+= dom;
            if (tl>=0)
                s+= d_+tld_[tl];
        }
        else
            s+= swapper(dom);
        return s;
    }

    function swapper(d){
        var s = "";
        for (var i=0; i<d.length; i+=2)
            if (i+1==d.length)
                s+= d.charAt(i)
            else
                s+= d.charAt(i+1)+d.charAt(i);
        return s.replace(/\?/g,'.');
    }

    var dialogOpen = false;

    function bounceTitle() {
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

        $(".poke-arm").velocity("stop").velocity({translateY:90, rotateZ:4}, {duration:300, delay:1000})
            .velocity({translateY:0, rotateZ:0}, {duration:400, delay:700});

        $(".poke-arm .fingers").velocity("stop").velocity({rotateZ:-5, scale:0.8}, {duration:200, delay:1300})
            .velocity({scale:1, rotateZ:0}, {duration:100, delay:500});
    }

    function toggleDialog(open){
        dialogOpen = !dialogOpen;
        if(open != null){
            dialogOpen = open;
        }

        $("#footer-wrap").toggleClass("open", dialogOpen);

        if(dialogOpen){
            $("#footer-wrap").velocity({
                top:120
            });
            bounceTitle();
        }else{
            $("#footer-wrap").velocity({
                top:"100%"
            });
        }
    }

    $(document).ready(function() {
        var to="aksel" + "kornesjo";
        var m = "@" + "gmail." + tld_[0];
        $(".mail-link").attr("href", "mailto:"+to+m);

        $(document.body).click(function(){
            toggleDialog();
        });

        $(document.body).keydown(function(e){
            if(e.keyCode == 27){
                toggleDialog(false);
            }
        });
    });
})();
