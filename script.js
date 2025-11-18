function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <span class="delete-btn" onclick="deleteTask(this)">×</span>
    `;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}
