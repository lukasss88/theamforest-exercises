
/*====================================
 SIDEBAR MENU SCRIPTS
 ======================================*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

    document.getElementById("mySidenav").style.width = "386px";
    document.getElementById("main").style.marginLeft = "386px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {


    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
/* Sidebar open menu button */
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

$(document).ready(function(){
    $(".button-menu").click(function(){
        $(".name").addClass('move-name');
        $(".lm_bg").addClass('lm_bg_active');
        $("ul").removeClass('sidebar-hide');
        $("ul").addClass('sidebar-active');
        $("ul a:nth-child(2)").removeClass('menu-1')
        $("ul a:nth-child(2)").addClass('menu-1-transition');
        $("ul a:nth-child(3)").removeClass('menu-2');
        $("ul a:nth-child(3)").addClass('menu-2-transition');
        $("ul a:nth-child(4)").removeClass('menu-3');
        $("ul a:nth-child(4)").addClass('menu-3-transition');
        $("ul a:nth-child(5)").removeClass('menu-4');
        $("ul a:nth-child(5)").addClass('menu-4-transition');
        $("ul a:nth-child(6)").removeClass('menu-5');
        $("ul a:nth-child(6)").addClass('menu-5-transition');
        $("ul a:nth-child(7)").removeClass('menu-6');
        $("ul a:nth-child(7)").addClass('menu-6-transition');

    })
    $(".closebtn").click(function(){
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        $("ul").addClass('sidebar-hide');
        $("ul a:nth-child(2)").addClass('menu-1');
        $("ul a:nth-child(2)").removeClass('menu-1-transition');
        $("ul a:nth-child(3)").addClass('menu-2');
        $("ul a:nth-child(3)").removeClass('menu-2-transition');
        $("ul a:nth-child(4)").addClass('menu-3');
        $("ul a:nth-child(4)").removeClass('menu-3-transition');
        $("ul a:nth-child(5)").addClass('menu-4');
        $("ul a:nth-child(5)").removeClass('menu-4-transition');
        $("ul a:nth-child(6)").addClass('menu-5');
        $("ul a:nth-child(6)").removeClass('menu-5-transition');
        $("ul a:nth-child(7)").addClass('menu-6');
        $("ul a:nth-child(7)").removeClass('menu-6-transition');
    })

});
$(document).ready( function() {
    if ($(window).width() < 768) {
        $(".button-menu").click(function () {
            $('.sidenav').addClass('sidebar-mobile');
            $('.name').addClass('remove-name');

        })
        $(".closebtn").click(function(){
            $('.sidenav').removeClass('sidebar-mobile');
            $('.name').removeClass('remove-name');

        })
    }
});


/*====================================
 PROGRESSBAR SCRIPTS
 ======================================*/

$(function() {

    var $meters = $(".progressbar");
    var $section = $('#skills');


    function loadDaBars() {
        $meters.each(function() {
            var bar = new ProgressBar.Line(bar1, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.6);

            var bar = new ProgressBar.Line(bar2, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.3);

            var bar = new ProgressBar.Line(bar3, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.9);

            var bar = new ProgressBar.Line(bar4, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.4);
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

});

/*====================================
 SKROLLR SCRIPTS
 ======================================*/

skrollr.init()

