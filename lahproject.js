var prev;
var curr;

var divcolor = document.getElementById("divcolor");
var divgender = document.getElementById("divgender");
var divfemaletype = document.getElementById("divfemaletype");
var divmaletype = document.getElementById("divmaletype");
var divfemaletops = document.getElementById("divfemaletops");
var divfemalebottoms = document.getElementById("divfemalebottoms");
var divmaletops = document.getElementById("divmaletops");
var divmalebottoms = document.getElementById("divmalebottoms");

var savedcolor;
var savedgender;
var savedfemaletype;
var savedmaletype;
var savedfemaletops;
var savedfemalebottoms;
var savedmaletops;
var savedmalebottoms;

divcolor.style.display = "block";
divgender.style.display = "none";
divfemaletype.style.display = "none";
divmaletype.style.display = "none";
divfemaletops.style.display = "none";
divfemalebottoms.style.display = "none";
divmaletops.style.display = "none";
divmalebottoms.style.display = "none";

var color = document.getElementById("color");
function savecolor()
{
  savedcolor = color.options[color.selectedIndex].value;
  console.log(savedcolor);
}

var gender = document.getElementById("gender");
function savegender()
{
  savedgender = gender.options[gender.selectedIndex].value;
  console.log(savedgender);
}

var femaletype = document.getElementById("femaletype");
function savefemaletype()
{
  savedfemaletype = femaletype.options[femaletype.selectedIndex].value;
  console.log(savedfemaletype);
}

var maletype = document.getElementById("maletype");
function savemaletype()
{
  savedmaletype = maletype.options[maletype.selectedIndex].value;
  console.log(savedmaletype);
}

var femaletops = document.getElementById("femaletops");
function savefemaletops()
{
  savedfemaletops = femaletops.options[femaletops.selectedIndex].value;
  console.log(savedfemaletops);
}

var femalebottoms = document.getElementById("femalebottoms");
function savefemalebottoms()
{
  savedfemalebottoms = femalebottoms.options[femalebottoms.selectedIndex].value;
  console.log(savedfemalebottoms);
}
var maletops = document.getElementById("maletops");
function savemaletops()
{
  savedmaletops = maletops.options[maletops.selectedIndex].value;
  console.log(savedmaletops);
}

var malebottoms = document.getElementById("malebottoms");
function savemalebottoms()
{
  savedmalebottoms = malebottoms.options[malebottoms.selectedIndex].value;
  console.log(savedmalebottoms);
}

var waw=0;
function nextphase()
{
  waw++;
  console.log(waw);
  monitor();
}

function monitor()
{

if (waw == 0)
{
  divcolor.style.display = "block";
}
    else if (waw == 1)
    {
      divgender.style.display = "block";
      divcolor.style.display = "none";
    }
        else if (waw == 2 && savedgender == "female")
        {
          divfemaletype.style.display = "block";
          divgender.style.display = "none";
        }
            else if (waw == 3 && savedfemaletype == "top")
            {
              divfemaletype.style.display = "none";
              divfemaletops.style.display="block";
            }

            else if (waw == 3 && savedfemaletype == "bottom")
            {
              divfemaletype.style.display = "none";
              divfemalebottoms.style.display="block"
            }

          /*  else if (waw == 3 && savedfemaletype == "dress")
            {
            }*/

        else if (waw == 2 && savedgender == "male")
        {
          divmaletype.style.display = "block";
          divgender.style.display = "none";
        }
            else if (waw == 3 && savedmaletype == "top")
            {
              divmaletype.style.display = "none";
              divmaletops.style.display = "block";
            }

            else if (waw == 3 && savedmaletype == "bottom")
            {
              divmaletype.style.display = "none";
              divmalebottoms.style.display = "block";
            }
}

/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds */
}
