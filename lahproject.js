var color = document.getElementById("color");

function savecolor()
{
var savedcolor = color.options[color.selectedIndex].value;
console.log(savedcolor);
}
