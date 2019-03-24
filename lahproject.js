var waw=0;
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

divcolor.style.display = "none";
divgender.style.display = "none";
divfemaletype.style.display = "none";
divmaletype.style.display = "none";
divfemaletops.style.display = "none";
divfemalebottoms.style.display = "none";
divmaletops.style.display = "none";
divmalebottoms.style.display = "none";

function nextphase()
{
  waw++;
  console.log(waw);


if (waw == 0)
{
  divcolor.style.display = "block";
}
    else if (waw == 1)
    {
      divgender.style.display = "block";
      divcolor.style.display = "none";
    }
        else if (waw == 2 && (savedgender == "female" || savedgender == "unisex"))
        {
          divfemaletype.style.display == "block";
          divgender.style.display == "none";
        }
}

var color = document.getElementById("color");
function savecolor()
{
  var savedcolor = color.options[color.selectedIndex].value;
  console.log(savedcolor);
}

var gender = document.getElementById("gender");
function savegender()
{
  var savedgender = gender.options[gender.selectedIndex].value;
  console.log(savedgender);
}

var femaletype = document.getElementById("femaletype");
function savefemaletype()
{
  var savedfemaletype = femaletype.options[femaletype.selectedIndex].value;
  console.log(savedfemaletype);
}

var maletype = document.getElementById("maletype");
function savemaletype()
{
  var savedmaletype = maletype.options[maletype.selectedIndex].value;
  console.log(savedmaletype);
}

var femaletops = document.getElementById("femaletops");
function savefemaletops()
{
  var savedfemaletops = femaletops.options[femaletops.selectedIndex].value;
  console.log(savedfemaletops);
}

var femalebottoms = document.getElementById("femalebottoms");
function savefemalebottoms()
{
  var savedfemalebottoms = femalebottoms.options[femalebottoms.selectedIndex].value;
  console.log(savedfemalebottoms);
}

var maletops = document.getElementById("maletops");
function savemaletops()
{
  var savedmaletops = maletops.options[maletops.selectedIndex].value;
  console.log(savedmaletops);
}

var malebottoms = document.getElementById("malebottoms");
function savemalebottoms()
{
  var savedmalebottoms = malebottoms.options[malebottoms.selectedIndex].value;
  console.log(savedmalebottoms);
}

/*{
  var "saved"+info = info.options[info.selectedIndex].value;
  console.log("saved"+info);
}*/
