function loadJSON (url) {	
	fetch(url)
	.then(res => res.json())
	.then((out) => {
	  console.log(out);
	  document.getElementById('RecipeName').innerHTML = out.title;
	  document.getElementById('description').innerHTML = out.userId;
	  document.getElementById('Region').innerHTML = out.completed;
	  document.getElementById('Category').innerHTML = out.id;
	})
	.catch(err => { throw err });
}

window.onload = function() {
	var queryString = location.search.substring(1);
	var a = queryString.split("|");
	var value1 = a[0];
	var value2 = a[1];
	document.getElementById('country').innerHTML = value1;
	document.getElementById('dish').innerHTML = value2;
	let url = 'https://jsonplaceholder.typicode.com/todos/1';
	loadJSON(url);
};

