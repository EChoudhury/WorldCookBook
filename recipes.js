window.onload = function() {
	var queryString = location.search.substring(1);
	let url = 'http://127.0.0.1:8000/recipe?ID='+queryString;
	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log(out);
	  document.getElementById('Name').innerHTML = out.Name;
	  document.getElementById('Description').innerHTML = out.Description;
	  //document.getElementById('Date').innerHTML = out.CreatedAt;
	  //document.getElementById('Country').innerHTML = out.Country;
	  document.getElementById('Ingredients').innerHTML = out.Ingredients.split('_').join(' ');
	  document.getElementById('Instructions').innerHTML = out.Instructions.split('_').join(' ');
	})
	.catch(err => { throw err });
};

