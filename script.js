var now = new Date();
var datetime = now.toDateString();
document.getElementById("date").innerHTML = datetime;

const inputBox = document.getElementById("weight");
const listContainer = document.getElementById("log-container");

function addToDo()
{
    if(inputBox.value === '')
    {
        alert("Enter weight.");
    }
    else
    {
        let li = document.createElement("li");
        // li.getElementById("curDate").innerHTML = datetime;
        // li.getElementById("curWeight").innerHTML = inputBox.value;
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName == "LI")
    {
        e.target.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function displaySaved()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

displaySaved();