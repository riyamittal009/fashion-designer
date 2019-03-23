var color = document.getElementById("color");
console.log('a', color);

function savecolor()
{
console.log('b', color);
var savedcolor = color.options[color.selectedIndex].value;
console.log(savedcolor);
}
