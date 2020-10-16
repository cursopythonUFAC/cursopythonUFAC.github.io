function sectionPos(){
  let secPos = document.getElementById("main-sec").getBoundingClientRect().top;
  document.getElementById("side-menu").style.top = (secPos>5)? secPos + "px": 5 + 'px';
  let val = (secPos>5)? (secPos+10):20;
  // console.log("Val:"+val+" | Sec:"+secPos);
  let h = window.innerHeight;
  document.getElementById("side-menu").style.maxHeight = (secPos>20)? h-val+'px':h-val+'px';
  
  //document.getElementById("side-menu").style.maxHeight = (secPos>5)?'calc(100% -'+(val)+'px)':'10000px';
}

var sectionHeight = function () {
  var total = $(window).height(),
    $section = $('section').css('height', 'auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height', 'auto');
  }
  sectionPos();
}

$(window).resize(sectionHeight);
$(document).on("scroll", onScroll);

/*
Procurar por:
https://www.jqueryscript.net/menu/fixed-in-page-navigation-scrollspy.html
Para ver o exemplo de menu
*/

$(function () {
  $("section h1, section h2, section h3").each(function () { //
    if ((new RegExp(/(Introdução|Atividade|Parte|Exemplo|Exercício)/g)).test($(this).text()) || (window.location.pathname + window.location.search) === '/') {
      text = $(this).text().split(':')[$(this).text().split(':').length - 1];
      $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + text + "</a></li>");
      $(this).attr("id", text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
      $("nav ul li:first-child a").parent().addClass("active");
    }
  });

  sectionPos();

  $("blockquote .language-python").each(function () {
    $(this).parent().addClass("jupyter-code");
  });
  $("blockquote strong").each(function () {
    if ($(this).text().includes("%Jup%")) {
      $(this).parent().parent().addClass("jupyter-markdown");
      $(this).parent().remove();
    }
  });

  $(".jupyter-markdown blockquote").each(function () {
    $(this).addClass("jupyter-txt");
  });

  $(".jupyter-markdown .jupyter-txt strong").each(function () {
    if ($(this).text().includes("%Cite%")) {
      $(this).parent().parent().removeClass("jupyter-txt");
      $(this).parent().remove();
    }
  });

  $(".language-mermaid").each(function () {
    $(this).unwrap();
    $(this).addClass("mermaid").removeClass("language-mermaid").changeElementType('div');
    //$(this).removeClass("language-mermaid");
    //$(this).replaceWith( '<div class="mermaid">' + $(this).text() + '</div>' )
  })

  $(".jupyter-code .language-python").before("<div class='jupyter-input'> [Py]: </div>")
  $(".jupyter-code p").before("<div class='jupyter-output'> [Out]:  </div>")
  $(".jupyter-code .language-java").before("<div class='jupyter-output'> [Out]:  </div>")

  $(".jupyter-markdown .language-markdown").before("<div class='jupyter-md'> [Md]: </div>")
  $(".jupyter-markdown .jupyter-txt").before("<div class='jupyter-text'> Resulta em:  </div>")

  $(document).on("scroll", onScroll);

  $("nav ul li").on("click", "a", function (event) {
    $(document).off("scroll");
    event.preventDefault();
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({
        scrollTop: position
      }, 400, 'swing',
      function () {
        $(document).on("scroll", onScroll);
      });
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });



  sectionHeight();

  $('img').on('load', sectionHeight);
});

function onScroll() {
  var removeActiveClass = function (elements) {
    for (var i = 0; i < elements.length; ++i) {
      elements[i].parentNode.classList.remove('active');
    }
  }
  //console.log((window.location.pathname+window.location.search)!=='/')
  sectionPos();

  var anchors = document.querySelectorAll('nav a');

  var previousRefElement = anchors[0];

  for (var i = 0; i < anchors.length; ++i) {
    // Get the current element by the id from the anchor's href.

    var currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));

    var currentRefElementTop = currentRefElement.getBoundingClientRect().top - 200;

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

  //$("nav").scrollTop($("nav .active").position().top);
  //var winTop = $("nav").scrollTop();
  //var winBottom = winTop + $("nav").height();
  //var elTop = $("nav .active").offset().top;
  //var elBottom = elTop + $("nav .active").height();

  //if (elBottom> winBottom){
  //  $("nav").scrollTop($("nav .active").position().top + $("nav .active").height()+300);
  //}else if(elTop < winTop){
  //  $("nav").scrollTop($("nav .active").position().top - 300);
  //}

  //pos = Math.round($("nav .active").position().top*$("nav").height()/$(window).height());
  //if (pos >0){
  //  $("nav").scrollTop($("nav .active").position().top-200);
  //}
  //$("nav").scrollTop($("nav .active").position().top);
}

//function isVisible($el) {
//  var winTop = $("nav").scrollTop();
//  var winBottom = winTop + $("nav").height();
//  var elTop = $el.offset().top;
//  var elBottom = elTop + $el.height();
//  console.log(elTop,elBottom)
//  return ((elBottom<= winBottom) && (elTop >= winTop));
//}