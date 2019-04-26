var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	var deleteButton = document.createElement("button");
	var id = new Date().getTime();//Unique Id
	deleteButton.setAttribute("id",id);
	deleteButton.setAttribute("onclick","deleteList("+id+")");
	deleteButton.appendChild(document.createTextNode("Delete"));

	li.appendChild(document.createTextNode(input.value+" "));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleTheListItem(event){	
	if(event.target.nodeName === "LI"){
		event.target.classList.toggle("done");
	}
}

function deleteList(id){
	
	var li = document.getElementById(id).parentElement;
	document.getElementById("todos").removeChild(li);//removes the list from UI

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleTheListItem);
