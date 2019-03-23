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
