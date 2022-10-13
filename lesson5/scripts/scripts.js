const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.length === 0){}
    else{
	const myBook = input.value;
	input.value = "";
	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myBook;
	listItem.appendChild(listBtn);
	listBtn.textContent = "❌";
	list.appendChild(listItem);

	listBtn.addEventListener("click", () => {
		list.removeChild(listItem);
	});
}
	input.focus();
});
