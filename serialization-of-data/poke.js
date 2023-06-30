 window.onload = function() {

    fetch('poke.json')
 
    .then(function(response) {
       return response.json();
    })
   
    .then(function(json) {
 
       var tableCode = '<table><caption>Pokedex</caption><thead><tr><th>Pokemon</th><th>Basestats</th><th>Primary</th><th>Secondary</th><th>Generation</th></tr></thead><tbody>';
 
       for (var i = 0; i < json.length; i++) {
          tableCode += '<tr><td>' + json[i].pokemon + '</td><td>' + json[i].basestats + '</td><td>' + json[i].primary + '</td><td>' + json[i].secondary + '</td><td>' + json[i].generation + '</td></tr>';
       }
 
       tableCode += '</tbody><tfoot><tr><td colspan="5">Source: My mind!</td></tr></tfoot></table>';
 
       document.getElementById('pokedex').innerHTML = tableCode;
   })
 }