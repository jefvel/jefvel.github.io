(function(){
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");

    document.write(
            unescape("%3Cscript src='" +
                gaJsHost +
                "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")
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

        if (tl!=-2) {
            s+= dom;
            if (tl>=0) {
                s+= d_+tld_[tl];
            }
        } else {
            s+= swapper(dom);
        }

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

    $(document).ready(function() {
        var to="aksel" + "kornesjo";
        var m = "@" + "gmail." + tld_[0];
        $(".mail-link").attr("href", "mailto:"+to+m);
    });
})();
