let inputBox = document.getElementById("input-box");
let addButton = document.getElementById("addBtn");
let listItems = document.getElementById("list-items");
let taskCountDiv = document.getElementById("taskCount");

let taskId = 0;
let completedTaskCount = 0;
let totalTaskCount = 0;

function taskCountDivDisplay() {
  if (totalTaskCount == 0) {
    taskCountDiv.innerText = "No Task Added";
    taskCountDiv.style.color = "Green";
  } else if (totalTaskCount == 1) {
    taskCountDiv.innerText = `${completedTaskCount} Completed of Total ${totalTaskCount} Task`;
    if (completedTaskCount == 1) {
      taskCountDiv.style.color = "green";
    } else {
      taskCountDiv.style.color = "orange";
    }
  } else {
    taskCountDiv.innerText = `${completedTaskCount} Completed of Total ${totalTaskCount} Tasks`;
    if (completedTaskCount == totalTaskCount) {
      taskCountDiv.style.color = "green";
    } else {
      taskCountDiv.style.color = "orange";
    }
  }
}

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn();
  }
});

function addTaskBtn() {
  if (inputBox.value == "") {
    alert("Please type something!!!");
  } else {
    listItems.innerHTML += `
                            <li id='task-${taskId}'>${inputBox.value}
                            <span id='completedTaskBtn' onclick="completedTask('task-${taskId}')">Completed</span>
                            <span onclick="deleteTask('task-${taskId}')">Delete</span>
                            </li>
                            `;
    taskId++;
    totalTaskCount++;
    taskCountDivDisplay();
  }
  inputBox.value = "";
  inputBox.focus();
}

function completedTask(id) {
  let liItem = document.getElementById(id);
  if (liItem.style.textDecoration == "line-through") {
    liItem.style.textDecoration = "none";
    completedTaskCount--;
    taskCountDivDisplay();
  } else {
    liItem.style.textDecoration = "line-through";
    completedTaskCount++;
    taskCountDivDisplay();
  }
}

function deleteTask(id) {
  let liItem = document.getElementById(id);
  if (liItem.style.textDecoration == "line-through") {
    completedTaskCount--;
    totalTaskCount--;
    taskCountDivDisplay();
    liItem.remove();
  } else {
    totalTaskCount--;
    taskCountDivDisplay();
    liItem.remove();
  }
}
