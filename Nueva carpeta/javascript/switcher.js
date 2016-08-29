window.console = window.console || function() {
   var e = {};
   e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function() {};
   return e
}();

$(document).ready(function() {
	var e =  '<div class="switcher-container">'+
               '<a href="#" class="sw-click"><i class="fa fa-sliders" aria-hidden="true"></i></a>'+
               '<div class="selector-box">'+
                    '<div class="sw-odd">'+
                        '<a href="#" class="styleswitch" id="color1">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a href="#" class="styleswitch" id="color2">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a href="#" class="styleswitch" id="color3">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a href="#" class="styleswitch" id="color4">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a href="#" class="styleswitch" id="color5">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a href="#" class="styleswitch" id="color6">'+
                            '&nbsp;'+
                        '</a>'+
                    '</div>'+               
                  '<div class="clearfix"></div>'+
               '</div>'+
            '</div>';
	$('body').append(e);
	switchAnimate.loadEvent();
	switchColor.loadEvent();
    });

    var switchColor = {
    colorObj: {
        colorCookie: "colorCookie",
        switchClass: ".styleswitch",
        currentClass: "current",
        headLink: "head link[id=colors]",
        colorItem: "a.styleswitch",
        reset: "#reset",
        defaultColor: "color1"
    },
    loadEvent: function() {
        var e = switchColor.colorObj;
        if ($.cookie(e.colorCookie)) {
            switchColor.setColor($.cookie(e.colorCookie))
        } else {
            switchColor.setColor(e.defaultColor)
        }
        $(e.colorItem).on("click", function() {           
            var e = $(this).attr("id");
            switchColor.setColor(e)
        });
        $(e.reset).on("click",function () {
            switchColor.setColor(e.defaultColor)
        })
    },
    setColor: function(e) {
        var t = switchColor.colorObj;
        $.cookie(t.colorCookie, e);
        $(t.headLink).attr("href", "stylesheets/colors/" + e + ".css");
        
        $(t.switchClass).removeClass(t.currentClass);
        $("#" + e).addClass(t.currentClass);

          //set color for text in content
        if($('.infomation.text-center h3').length === 1) {
            var hiText = $('.infomation.text-center h3').closest('.section').css("background-color").toString();
            if(hiText === "rgb(91, 91, 91)")
                $('.infomation.text-center h3').css('color', "#fff");
            }
        }
    };

	
    var switchAnimate = {
		loadEvent: function() {
		  $(".switcher-container a.sw-click").on('click',function(e) {
			 var t = $(".switcher-container");

			 if (t.css("right") === "-280px") {
				$(".switcher-container").animate({ right: "0"}, 300, 'easeInOutExpo')
			 } else {
				$(".switcher-container").animate({ right: "-280px" }, 300, 'easeInOutExpo')
			 }
			 e.preventDefault();
		 })
	   }
	};
    

