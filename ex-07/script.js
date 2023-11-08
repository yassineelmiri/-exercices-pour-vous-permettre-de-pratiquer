document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const label = document.createElement("label");
      label.textContent = taskText;
      taskItem.appendChild(checkbox);
      taskItem.appendChild(label);
      taskList.appendChild(taskItem);
      taskInput.value = "";
      checkbox.addEventListener("change", toggleTask);
    }
  }
  function toggleTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle("completed");
  }
});
