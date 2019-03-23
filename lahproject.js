var choosecolor = document.getElementById("color");

function savecolor()
{
var savedcolor = choosecolor.options[choosecolor.selectedIndex].value;
console.log(savedcolor);
}
