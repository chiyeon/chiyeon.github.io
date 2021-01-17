window.onload = function() {
   var hint = document.getElementById("info-hint");
   var page = document.getElementById("page");

   page.onscroll = function() {
      console.log("HI");
      var scrollTop = document.scrollTop();
      console.log(scrollTop);
   }
}

window.onscroll = function() {
   console.log("hmm");
}