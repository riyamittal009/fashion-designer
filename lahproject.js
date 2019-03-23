var choosecolor = document.getElementById("color");

function savecolor()
{
    return choosecolor.value;
}

var savedcolor = choosecolor.options[choosecolor.selectedIndex].value;
console.log(savedcolor);
