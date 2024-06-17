function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value.trim();

    if (task !== "") {
        var li = document.createElement("li");
        li.innerHTML = task + '<button class="delete-btn" onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
