



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*slider*/

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}



/*setTimeOUT*/

var slikeNiz = [];
var i=0;

slikeNiz[0]='img/Real-Namibia---Feel-The-Adventure.png';
slikeNiz[1]='img/Get-a-FREE-&-Professional-Divi-Auto-Repair-Layout-Pack.png';
slikeNiz[2]='img/majtor-gleda.png';

function promenaSlike(){
  document.getElementById('setTimeOut').src=slikeNiz[i];

  if(i<slikeNiz.length-1){
    i++;
  }
  else {i=0};
  setTimeout("promenaSlike()", 2000);
}

window.onload=promenaSlike;









