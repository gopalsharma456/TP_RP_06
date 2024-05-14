const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("addBtn");
const listItems = document.getElementById("list-items");
let id = 0;

addButton.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("Please type something!!!");
  } else {
    listItems.innerHTML += `
                            <li>${inputBox.value}
                            <span>Delete</span>
                            </li>
                            `;
  }
  inputBox.value = "";
});




listItems.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
