
/*====================================
 SIDEBAR MENU SCRIPTS
 ======================================*/

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {


    document.getElementById("main").style.marginLeft = "0";

}



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

    });
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
    });

});
$(document).ready( function() {

    $(".button-menu").click(function () {
        $('#mySidenav').addClass('opened');
        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        document.getElementById("main").style.marginLeft = "386px";
        document.body.style.backgroundColor = "#272727";
    })
    $(".closebtn").click(function () {
        $('#mySidenav').removeClass('opened');
    });
    $('.menu-1').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
    $('.menu-2').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
    $('.menu-3').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
    $('.menu-4').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
    $('.menu-5').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
    $('.menu-6').click(function() {
        $('#mySidenav').removeClass('opened');
        $(".name").removeClass('move-name');
        $(".lm_bg").removeClass('lm_bg_active');
        $("ul").removeClass('sidebar-active');
        document.getElementById("main").style.marginLeft = "0px";
    })
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
                trailColor: 'rgb(127,127,127)',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.6);

            var bar = new ProgressBar.Line(bar2, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: 'rgb(127,127,127)',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.3);

            var bar = new ProgressBar.Line(bar3, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: 'rgb(127,127,127)',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
            });

            bar.animate(0.9);

            var bar = new ProgressBar.Line(bar4, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#E45064',
                trailColor: 'rgb(127,127,127)',
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



/*====================================
 PHOTOSWIPE SCRIPTS
 ======================================*/
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

