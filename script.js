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

  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.onclick = function () {
    let newTask = prompt("Edit your task:", taskInput.value);
    if (newTask) span.innerHTML = `${newTask} <br><small>${dateTimeInput.value}</small>`;
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    li.remove();
  };

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";
}
