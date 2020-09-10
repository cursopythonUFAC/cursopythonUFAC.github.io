var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);
$(document).on("scroll", onScroll);

$(function() {
  $("section h1").each(function(){//, section h2, section h3
    text=$(this).text().split(':')[$(this).text().split(':').length-1];
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + text + "</a></li>");
    $(this).attr("id",text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });
  
  $(document).on("scroll", onScroll);

  $("nav ul li").on("click", "a", function(event) {
    $(document).off("scroll");
    event.preventDefault();
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400, 'swing',  
    function () { $(document).on("scroll", onScroll);});
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});

function onScroll(){
  var removeActiveClass = function (elements) {
    for (var i = 0; i < elements.length; ++i) {
        elements[i].parentNode.classList.remove('active');
    }
  }
  
    var anchors = document.querySelectorAll('nav a');
    
    var previousRefElement = anchors[0];

    for (var i = 0; i < anchors.length; ++i) {
        // Get the current element by the id from the anchor's href.
        
        var currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));
        
        var currentRefElementTop = currentRefElement.getBoundingClientRect().top-200;
        
        //console.log(currentRefElement + currentRefElementTop);
        
        // Searching for the element whose top haven't left the top of the browser.
        if (currentRefElementTop <= 0) {
            //The browser's top line haven't reached the current element, so the previous element is the one we currently look at.
            previousRefElement = anchors[i];
            // Edge case for last element.
            if (i == anchors.length - 1) {
                removeActiveClass(anchors);
                anchors[i].parentNode.classList.add("active");
            }
        } else {
            removeActiveClass(anchors);
            previousRefElement.parentNode.classList.add("active");
            break;
        }
        
    }
}
