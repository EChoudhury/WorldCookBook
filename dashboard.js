function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("countryModal").style.display = "block"
    document.getElementById("countryModal").className += "show"
}
function closeModal() {
		var divShowData = document.getElementById('recipeList');
		divShowData.innerHTML = "";
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("countryModal").style.display = "none"
    document.getElementById("countryModal").className += document.getElementById("countryModal").className.replace("show", "")
}

var map = new jsVectorMap({
	selector: "#map",
	map: "world",
	regionsSelectable: true,
	onLoaded(map) {
		// This is a great opportunity and useful use-case to handle the reszing of the window.
		window.addEventListener('resize', () => {
		  map.updateSize()
		})
	},
	onRegionSelected(code, isSelected, selectedRegions) {
		document.getElementById('exampleModalLabel').innerHTML = code;
		tableFromJson(code);
		openModal();
	}
});

(function () {
  'use strict'
  feather.replace()
})()

function loadJSON (url) {	
	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log(out);
	})
	.catch(err => { throw err });
}

window.onload = function() {
	//let url = 'https://jsonplaceholder.typicode.com/todos/1';
	//loadJSON('recipe1', url);
};

// Get the modal
var modal = document.getElementById('countryModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

function tableFromJson(code) {
		// the json data. (you can change the values for output.)
	console.log(code);
	let url = 'http://127.0.0.1:8000/list?code='+code;
	fetch(url)
	.then(res => res.json())
	.then((out) => {
			var divShowData = document.getElementById('recipeList');
			divShowData.innerHTML = "";
			console.log(out[0].Name);
			if (out[0].Name === "error") {
				divShowData.innerHTML = "No recipes yet! Sign in to make the first!";
			} else {
				console.log(out);
				var recipes = out;
				console.log(recipes);
				console.log(recipes.length);
				
				// Extract value from table header. 
				var col = [];
				col.push("Name");
				col.push("Description");

				// Create a table.
				var table = document.createElement("table");

				// Create table header row using the extracted headers above.
				var tr = table.insertRow(-1);                   // table row.

				for (var i = 0; i < col.length; i++) {
						var th = document.createElement("th");      // table header.
						th.innerHTML = col[i];
						tr.appendChild(th);
				}

				// add json data to the table as rows.
				for (var i = 0; i < recipes.length; i++) {

						tr = table.insertRow(-1);

						for (var j = 1; j < 3; j++) {
						    var tabCell = tr.insertCell(-1);
							if (j === 1) {
								tabCell.innerHTML = recipes[i].Name;
								console.log(recipes[i].ID);
								tabCell.innerHTML = tabCell.innerHTML.link("recipe.html?" + recipes[i].ID);
							} else {
								var rep = recipes[i].Description.split('_').join(' ');
								tabCell.innerHTML = rep;
							}
						}
				}

				// Now, add the newly created table with json data, to a container.
				
				divShowData.appendChild(table);
				table.style.width= "100%";
			}
	})
	.catch(err => { throw err });
}

