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
        else if (waw == 2 && (savedgender == "female" || savedgender == "unisex"))
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
          dimaletype.style.display = "block";
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

      var algoliasearch = require('algoliasearch');
        // var algoliasearch = require('algoliasearch/reactnative');
        // var algoliasearch = require('algoliasearch/lite');
        // import * as algoliasearch from 'algoliasearch'; // When using TypeScript

        // or just use algoliasearch if you are using a <script> tag
        // if you are using AMD module loader, algoliasearch will not be defined in window,
        // but in the AMD modules of the page

        var client = algoliasearch('DKG1T96OHW', '166c41803287eebeeaba52a556f58e2a');
        var index = client.initIndex('contacts');
var contactsJSON = require('./contacts.json');

index.addObjects(contactsJSON, function(err, content) {
  if (err) {
    console.error(err);
  }
});

index.setSettings({
  'searchableAttributes': [
    'lastname',
    'firstname',
    'company',
    'email',
    'city',
    'address'
  ]
}, function(err, content) {
  console.log(content);
});

index.setSettings({
  'customRanking': ['desc(followers)']
}, function(err, content) {
  console.log(content);
});

// Search for a first name
index.search('jimmie', function(err, content) {
  console.log(content.hits);
});

// Search for a first name with typo
index.search('jimie', function(err, content) {
  console.log(content.hits);
});

// Search for a company
index.search('california paint', function(err, content) {
  console.log(content.hits);
});

// Search for a first name and a company
index.search('jimmie paint', function(err, content) {
  console.log(content.hits);
});

// Replace with your own values
var searchClient = algoliasearch(
  'DKG1T96OHW',
  '
••••••••••••••••••••••••••••••••' // search only API key, no ADMIN key
);

var search = instantsearch({
  indexName: 'instant_search',
  searchClient: searchClient,
  routing: true,
});

search.addWidget(
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for products',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>',
    },
  })
);

search.start();
