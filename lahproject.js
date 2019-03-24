
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

var one;
var two;
var three;
var four;

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
  one = savedcolor;
  console.log(one);
}

var gender = document.getElementById("gender");
function savegender()
{
  savedgender = gender.options[gender.selectedIndex].value;
  // console.log(savedgender);
}

var femaletype = document.getElementById("femaletype");
function savefemaletype()
{
  savedfemaletype = femaletype.options[femaletype.selectedIndex].value;
  // console.log(savedfemaletype);
}

var maletype = document.getElementById("maletype");
function savemaletype()
{
  savedmaletype = maletype.options[maletype.selectedIndex].value;
  // console.log(savedmaletype);
}

var femaletops = document.getElementById("femaletops");
function savefemaletops()
{
  savedfemaletops = femaletops.options[femaletops.selectedIndex].value;
  // console.log(savedfemaletops);
}

var femalebottoms = document.getElementById("femalebottoms");
function savefemalebottoms()
{
  savedfemalebottoms = femalebottoms.options[femalebottoms.selectedIndex].value;
  // console.log(savedfemalebottoms);
}
var maletops = document.getElementById("maletops");
function savemaletops()
{
  savedmaletops = maletops.options[maletops.selectedIndex].value;
  // console.log(savedmaletops);
}

var malebottoms = document.getElementById("malebottoms");
function savemalebottoms()
{
  savedmalebottoms = malebottoms.options[malebottoms.selectedIndex].value;
  // console.log(savedmalebottoms);
}

var waw=0;
function nextphase()
{
  waw++;
  console.log(waw);
  monitor();
}

var handleimage = document.getElementById("testrun");

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
          two = "female";
          console.log(two);
        }
            else if (waw == 3 && savedfemaletype == "top")
            {
              divfemaletype.style.display = "none";
              divfemaletops.style.display="block";
              three = "top";
              console.log(three);
            }
                else if (savedfemaletops == "t-shirt")
                {
                  four = "tshirt";
                  console.log(four);
                  console.log("campaign.jpg");
                  picture();
                }
                else if (savedfemaletops == "fullsleeve")
                {
                  four = "fullsleeve";
                }
                else if (savedfemaletops == "tanktop")
                {
                  four = "tanktop";
                }
                else if (savedfemaletops == "hoodie")
                {
                  four = "hoodie";
                }

            else if (waw == 3 && savedfemaletype == "bottom")
            {
              divfemaletype.style.display = "none";
              divfemalebottoms.style.display="block"
              three = "bottom";
            }
                else if (savedfemalebottoms == "jeans")
                {
                    four = "jeans";
                }
                else if (savedfemalebottoms == "leggings")
                {
                    four = "leggings";
                }
                else if (savedfemalebottoms == "skirt")
                {
                    four = "skirt";
                }

          /*  else if (waw == 3 && savedfemaletype == "dress")
            {
            }*/

        else if (waw == 2 && savedgender == "male")
        {
          divmaletype.style.display = "block";
          divgender.style.display = "none";
          two = "male";
        }
            else if (waw == 3 && savedmaletype == "top")
            {
              divmaletype.style.display = "none";
              divmaletops.style.display = "block";
              three = "top";
            }
                else if (savedmaletops == "t-shirt")
                {
                    four = "tshirt";
                }
                else if (savedmaletops == "fullsleeve")
                {
                  four = "fullsleeve";
                }
                else if (savedmaletops == "hoodie")
                {
                  four = "hoodie";
                }

            else if (waw == 3 && savedmaletype == "bottom")
            {
              divmaletype.style.display = "none";
              divmalebottoms.style.display = "block";
              three = "bottom";
            }
                else if (savedmalebottoms == "jeans")
                {
                    four = "jeans";
                }
                else if (savedmalebottoms == "sweatpants")
                {
                    four = "sweatpants";
                }
                else if (savedmalebottoms == "shorts")
                {
                    four = "shorts";
                }
}


function picture()
{
handleimage.src=one+two+three+four + ".jpg";
}
