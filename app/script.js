
// Function to add a new task
function addTask() {

    // Get the input field
    const input = document.getElementById("taskInput");

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateTaskCounter();
}

function updateTaskCounter() {
    const totalTasks = document.querySelectorAll("#taskList li").length;

    document.getElementById("taskCounter").textContent =
        "Total Tasks: " + totalTasks;
}    // Read the entered task
    const taskText = input.value.trim();

    // Check whether input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Mark task as completed when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Add task to the webpage
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    input.value = "";
}

