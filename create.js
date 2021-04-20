function sendJSON() {
	let name = document.querySelector('#Name');
	let desc = document.querySelector('#Description');
	let country = document.querySelector('#Country');
	let ing = document.querySelector('#Ingredients');
	let ins = document.querySelector('#Instructions');

	let xhr = new XMLHttpRequest();
	let url = "http://127.0.0.1:8000/create";
	xhr.open("POST", url, true);

	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(this.responseText);
		}
	};

	var data = JSON.stringify({"Name":name.value, "Description":desc.value,"Country":country.value,"Instructions":ins.value,"Ingredients":ing.value});

	xhr.send(data);
}
