
window.onscroll = function(){scrollFunction()};
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function scrollFunction()
{
  if(window.pageYOffset >= sticky)
  {
    nav.classList.add("fixed");
  }
  else
  {
    nav.classList.remove("fixed");
  }
}