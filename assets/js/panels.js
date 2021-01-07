var elements = document.getElementsByClassName("page");

function FocusPage(pageID) {
   /* Unknown usage.
   for(var i = 0; i < elements.length; i++) {
      if(elements[i].classList.contains("main")) {
         var currPage = i;
      }
   }*/

   for(var i = 0; i < elements.length; i++) {
      if(i == pageID) {
         elements[i].classList.add("main");
         if(elements[i].classList.contains("hidden")) {
            elements[i].classList.remove("hidden");
         } else if(elements[i].classList.contains("hiding")) {
            elements[i].classList.remove("hiding");
         }
      } else if(elements[i].classList.contains("main")) {
         elements[i].classList.remove("main");
         elements[i].classList.add("hiding");
      } else if(elements[i].classList.contains("hiding")) {
         elements[i].classList.remove("hiding");
         elements[i].classList.add("hidden");
      } else if(!elements[i].classList.contains("hidden")) {
         elements[i].classList.add("hidden");
      }
   }
}

function PlayVideo(title, tagline, videoID) {
   // set the title, tagline, and iframe data of video player
   document.getElementById("video-player-title").textContent = title;
   document.getElementById("video-player-tagline").textContent = tagline;
   document.getElementById("video-player").src = `https://www.youtube.com/embed/${videoID}`;

   // focus page 5 which is the video player
   FocusPage(5);
}

