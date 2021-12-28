var elements = document.getElementsByClassName("page");

function FocusPage(pageID) {
   /* Unknown usage.
   for(var i = 0; i < elements.length; i++) {
      if(elements[i].classList.contains("main")) {
         var currPage = i;
      }
   }*/

   // localStorage.setItem("page", pageID);
   history.pushState({}, null, "/old/?page=" + pageID);

   for(var i = 0; i < elements.length; i++) {
      if(i == pageID) {
         elements[i].classList.add("introducing");
         if(elements[i].classList.contains("hidden")) {
            elements[i].classList.remove("hidden");
         } else if(elements[i].classList.contains("hiding")) {
            elements[i].classList.remove("hiding");
         }
      } else if(elements[i].classList.contains("introducing") || elements[i].classList.contains("main")) {
         elements[i].classList.remove("introducing");
         elements[i].classList.add("hiding");
      } else if(elements[i].classList.contains("hiding")) {
         elements[i].classList.remove("hiding");
         elements[i].classList.add("hidden");
      } else if(!elements[i].classList.contains("hidden")) {
         elements[i].classList.add("hidden");
      }
   }
}

window.addEventListener("load", () => {
   // var newPage = localStorage.getItem("page");

   var urlParams = new URLSearchParams(window.location.search);
   var newPage = urlParams.get("page");

   if(newPage == undefined)
      return;

   for(var i = 0; i < elements.length; i++) {
      if(newPage == i) {
         elements[i].setAttribute("class", "page main");
      } else {
         elements[i].setAttribute("class", "page hidden");
      }
   }
}, false);

// add '?page=0' to the  end of the URL if nothing is there.


// refocuses page when pressing the back button in the main page, using the cached 'page' variable in the URL  
window.onpopstate = function() {
   var urlParams = new URLSearchParams(window.location.search);
   var newPage = urlParams.get("page");

   // focus the page on 0 if is undefined. this is because when the user first loads the page, ?page=0 is not included in the homepage
   if(newPage == undefined) {
      FocusPage(0);
      return;
   }
   
   FocusPage(newPage);
}

// dynamic video switching has been removed in favor of individual web pages per video.

// === DEPRACATED ================
function PlayVideo(title, tagline, videoID) {
   // set the title, tagline, and iframe data of video player
   document.getElementById("video-player-title").textContent = title;
   document.getElementById("video-player-tagline").textContent = tagline;
   document.getElementById("video-player").src = `https://www.youtube.com/embed/${videoID}?enablejsapi=1&version=3&playerapiid=ytplayer`;

   // focus page 5 which is the video player
   FocusPage(5);
}

function StopVideo() {
   document.getElementById("video-player").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// === END DEPRACATED ============