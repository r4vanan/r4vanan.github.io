const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector('.cursor2');
const explore_cursor = document.querySelector('.explore_cursor');
const music = new Audio('adf.wav');

music.play();

document.addEventListener('mousemove',(e) =>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top =  e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
  cursor2.style.top =  e.pageY + 'px';
  explore_cursor.style.left = e.pageX + 'px';
  explore_cursor.style.top =  e.pageY + 'px';
} )

function BigCursor() { 
    cursor.style.backgroundColor = "white";
    cursor.style.height = "80px";
    cursor.style.width = "80px";
    cursor2.style.backgroundColor = "transparent";
  }
  
  
function normalCursor() { 
    cursor.style.backgroundColor = "transparent";
    cursor.style.height = "50px";
    cursor.style.width = "50px";
    cursor2.style.backgroundColor = "#c6c6c6";
    explore_cursor.style.display = "none";
    cursor.style.display = "block";
    cursor2.style.display = "block";
  }
  

  function ExploreCursor(){
    explore_cursor.style.display = "block";
    cursor.style.display = "none";
    cursor2.style.display = "none";
  }
  var modal = document.getElementById("myModal");

var btn = document.getElementById("show_reel");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
