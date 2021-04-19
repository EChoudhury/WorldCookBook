function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("countryModal").style.display = "block"
    document.getElementById("countryModal").className += "show"
}
function closeModal() {
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
		tableFromJson()
		openModal();
	}
});

(function () {
  'use strict'
  feather.replace()
})()

function loadJSON (variable, url) {	
	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log(out);
	  document.getElementById(variable).innerHTML = out.title;
	})
	.catch(err => { throw err });
}

window.onload = function() {
	let url = 'https://jsonplaceholder.typicode.com/todos/1';
	loadJSON('recipe1', url);
};

// Get the modal
var modal = document.getElementById('countryModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

function tableFromJson() {
		// the json data. (you can change the values for output.)
        var recipes = [
            {'Book ID': 'egypt|Koshari', 'Book Name': 'Challenging Times',
                'Category': 'Business', 'Price': '125.60'
            },
            {'Book ID': '2', 'Book Name': 'Learning JavaScript',
                'Category': 'Programming', 'Price': '56.00'
            },
            {'Book ID': '3', 'Book Name': 'Popular Science',
                'Category': 'Science', 'Price': '210.40'
            },
			{'Book ID': '1', 'Book Name': 'Challenging Times',
                'Category': 'Business', 'Price': '125.60'
            },
            {'Book ID': '2', 'Book Name': 'Learning JavaScript',
                'Category': 'Programming', 'Price': '56.00'
            },
            {'Book ID': '3', 'Book Name': 'Popular Science',
                'Category': 'Science', 'Price': '210.40'
            },
			{'Book ID': '1', 'Book Name': 'Challenging Times',
                'Category': 'Business', 'Price': '125.60'
            },
            {'Book ID': '2', 'Book Name': 'Learning JavaScript',
                'Category': 'Programming', 'Price': '56.00'
            },
            {'Book ID': '3', 'Book Name': 'Popular Science',
                'Category': 'Science', 'Price': '210.40'
            },
			{'Book ID': '1', 'Book Name': 'Challenging Times',
                'Category': 'Business', 'Price': '125.60'
            },
            {'Book ID': '2', 'Book Name': 'Learning JavaScript',
                'Category': 'Programming', 'Price': '56.00'
            },
            {'Book ID': '3', 'Book Name': 'Popular Science',
                'Category': 'Science', 'Price': '210.40'
            }
        ]

        // Extract value from table header. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < recipes.length; i++) {
            for (var key in recipes[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

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

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
				if (j === 0) {
					tabCell.innerHTML = i;
					tabCell.innerHTML = tabCell.innerHTML.link("recipe.html?" + recipes[i][col[j]]);
				} else {
					tabCell.innerHTML = recipes[i][col[j]];
				}
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('recipeList');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
		table.style.width= "100%";
}

