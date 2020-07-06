let button = document.getElementById("new_task");
button.addEventListener("click", borrarCanvas);
var image = document.getElementById("message")

function borrarCanvas(){
    image.style.display = "none";
}

let taskList = [];

function imgDisplay () {
    if (taskList.length == 0) {
        image.style.display = "flex"
    }
}

function task (name) {
    this.name = name;
}

var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");
var add = document.getElementById("add")

button.onclick = function () {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none"
}

cancel.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    imgDisplay();
}

add.onclick = function () {
    var userTask = document.getElementById("text_box").value;
    var newTask = new task(userTask);
    taskList.push(newTask);
    modal.style.display = "none";
}

document.getElementById("text_box").value = "";