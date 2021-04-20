function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("submitModal").style.display = "block"
    document.getElementById("submitModal").className += "show"
}
function closeModal() {
		var divShowData = document.getElementById('result');
		divShowData.innerHTML = "";
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("submitModal").style.display = "none"
    document.getElementById("submitModal").className += document.getElementById("submitModal").className.replace("show", "")
}

function sendJSON() {	
	let name = document.querySelector('#Name');
	let country = document.querySelector('#Country');
	let desc = document.querySelector('#Description');
	let ing = document.querySelector('#Ingredients');
	let ins = document.querySelector('#Instructions');

	var result = document.getElementById("result");
	let xhr = new XMLHttpRequest();
	let url = "http://127.0.0.1:8000/create";
	xhr.open("POST", url, true);

	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			result.innerHTML = this.responseText;
		}
	};

	var data = JSON.stringify({"Name":name.value, "Description":desc.value,"Country":country.value,"Instructions":ins.value,"Ingredients":ing.value});

	xhr.send(data);
	
	openModal();
}

// Get the modal
var modal = document.getElementById('submitModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}
