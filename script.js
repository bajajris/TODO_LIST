let task = document.getElementById("task");
let container = document.getElementById("taskContainer");
let innerDiv;
let innerParagraph;
let closeButton;
var divText;
let taskList = [];
taskClass = task.className;
let clearBtn = document.getElementById("clear");

const addTask = () => {
    // document.getElementById("taskContainer").innerHTML = "jsadjas";
    // console.log(task.value);
    if (task.value !== "") {
        taskList.push(task.value);
        innerDiv = "";
        task.value = "";
        task.setAttribute("placeholder", "Enter another one!!!");
        task.className = taskClass + " correct";
        displayTasks();
    } else {
        alert("The input box cannot be empty!!");
        task.setAttribute("placeholder", "The input box cannot be empty. Please enter a value!!!");
        task.className = taskClass + " error";
    }
}

const displayTasks = () => {
    if (taskList.length === 0) {
        task.setAttribute("placeholder", "Enter a task to add to the list!!!");
    }
    document.getElementById("taskContainer").innerHTML = "";
    taskList.map((tasks, index) => {
        // console.log(tasks);
        innerDiv = document.createElement("div");
        innerDiv.className = "tasks";
        divText = document.createTextNode(tasks);
        innerParagraph = document.createElement("p");
        innerParagraph.appendChild(divText);
        innerDiv.appendChild(innerParagraph);
        closeButton = document.createElement("a");
        closeButton.className = "closeBtn";
        closeButton.setAttribute("href", "javascript:void(0)");
        closeButton.setAttribute("onclick", "");
        closeButton.appendChild(document.createTextNode("X"));
        innerDiv.append(closeButton);
        innerDiv.setAttribute("key", index);
        container.appendChild(innerDiv);

    })
}

let add = document.getElementById("add");
add.addEventListener('click', () => {
    addTask();
    console.log("Commit");
});
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.className == 'closeBtn') {
        var x = e.target.parentNode.getAttribute("key");
        console.log(x);
        taskList.splice(x, 1);
        displayTasks();
    }
});

clearBtn.addEventListener('click', () => {
    console.log(taskList.slice(0, 4));
    taskList.splice(0);
    displayTasks();
});