function addTask() {
  let taskInput = document.getElementById("taskInput");
  let dateTimeInput = document.getElementById("taskDateTime");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = `${taskInput.value} <br><small>${dateTimeInput.value}</small>`;

  
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    let newTask = prompt("Edit your task:", taskInput.value);
    if (newTask) span.innerHTML = `${newTask} <br><small>${dateTimeInput.value}</small>`;
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";
}
