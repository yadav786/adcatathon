(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
};

includeHTML();

function myInsuranceFunction() {
  document.getElementById('no-response').style.zIndex= -1;
  document.getElementById('img-response').src = '';
}

function noToInsurance() {
    document.getElementById('img-response').src = '../assets/oOOOWhat.gif';  
    document.getElementById('no-response').style.zIndex = 1;
    setTimeout(myInsuranceFunction, 1600);
}

function redirectToInsurance() {
    window.location.href='./buyInsurance.html?insurance='+$("#getInsurance").text();
}

var vid = document.getElementById("myVideo");

if(parseInt(vid.currentTime)===0) {
  $("#notify-insurance").css({display: 'none'});
}

vid.ontimeupdate = function() {getVideoUpdate()};
function getVideoUpdate() {
  if(parseInt(vid.currentTime) >= 16 && parseInt(vid.currentTime) < 23){
    $('#getInsurance').text('Life Term');
    $("#notify-insurance").css({display: 'block'});
  }
  else if(parseInt(vid.currentTime) >= 23 && parseInt(vid.currentTime) < 28){
    $('#getInsurance').text('Accidental');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 28 && parseInt(vid.currentTime) < 33){
    $('#getInsurance').text('Property');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 33 && parseInt(vid.currentTime) < 40){
    $('#getInsurance').text('Travel');
    $("#notify-insurance").css({display: 'block'});
  }
  else if(parseInt(vid.currentTime) >= 53 && parseInt(vid.currentTime) < 61){
    $('#getInsurance').text('Vehicle');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 62 && parseInt(vid.currentTime) < 70){
    $('#getInsurance').text('Fire');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 90 && parseInt(vid.currentTime) < 100){
    $('#getInsurance').text('Motor');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 103 && parseInt(vid.currentTime) < 111){
    $('#getInsurance').text('Health');
    $("#notify-insurance").css({display: 'block'});
  }

  else if(parseInt(vid.currentTime) >= 114 && parseInt(vid.currentTime) < 118){
    $('#getInsurance').text('Personal');
    $("#notify-insurance").css({display: 'block'});
  }
  else {
    $("#notify-insurance").css({display: 'none'});
  }

}