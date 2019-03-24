var prev;
var curr;

var divcolor = document.getElementById("divcolor");
var divgender = document.getElementById("divgender");
var divfemaletype = document.getElementById("divfemaletype");
var divmaletype = document.getElementById("divmaletype");
var divfemaletops = document.getElementById("divfemaletops");
var divfemalebottoms = document.getElementById("divfemalebottoms");
var divunisextype = document.getElementById("divunisextype");
var divunisextops = document.getElementById("divunisextops");
var divunisexbottoms = document.getElementById("divunisexbottoms");
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
divunisextops.style.display = "none";
divunisexbottoms.style.display = "none";
divunisextype.style.display="none";

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

var unisextops = document.getElementById("unisextops");
function saveunisextops()
{
  savedunisextops = femaletops.options[unisextops.selectedIndex].value;
  console.log(savedunisextops);
}

var unisexbottoms = document.getElementById("funisexbottoms");
function saveunisexbottoms()
{
  savedunisexbottoms = unisexbottoms.options[unisexbottoms.selectedIndex].value;
  console.log(savedunisexbottoms);
}

var unisextype = document.getElementById("unisextype");
function saveunisextype()
{
  savedunisextype = unisextype.options[unisextype.selectedIndex].value;
  console.log(savedunisextype);
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
        else if (waw == 2 && savedgender == "female"))
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

            else if (waw == 2 && savedgender == "unisex"))
            {
              divunisextype.style.display = "block";
              divgender.style.display = "none";
            }
                else if (waw == 3 && savedunisextype == "top")
                {
                  divunisextype.style.display = "none";
                  divunisextops.style.display="block";
                }

                else if (waw == 3 && savedunisextype == "bottom")
                {
                  divunisextype.style.display = "none";
                  divunisexebottoms.style.display="block"
                }

        else if (waw == 2 && savedgender == "unisex"){
          divfemaletype.style.display = "block";
          divgender.style.display = "none";
        }
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
