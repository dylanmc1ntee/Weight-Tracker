var now = new Date();
var datetime = now.toDateString();
document.getElementById("date").innerHTML = datetime;
var connect = "  -  ";
var pounds = "lbs";
var numbers = [];
var change = [];
let net = 0;

const inputBox = document.getElementById("weight");
const listContainer = document.getElementById("log-container");

function findChange()
{
    for(var i = 0; i < numbers.length - 1; i++)
    {
        change[i] = numbers[i + 1] - numbers[i];
    }
}

function calculateAverage(array) 
{ 
    const sum = array.reduce((acc, curr) => acc + curr, 0); 
    const average = sum / array.length; 
    return average; 
} 

function restart()
{
    var numbers = [];
    var change = [];
}

function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}

function calculate()
{
    if(numbers.length < 2)
    {
        document.getElementById("avgNet").innerHTML = "N/A";
    }
    else
    {
        findChange();
        const ans = roundTo(calculateAverage(change), 1);
        document.getElementById("avgNet").innerHTML = ans;
        net = ans;

        if(ans > 0)
        {
            document.getElementById("avgNet").style.color = "#007502";
        }
        else
        {
            document.getElementById("avgNet").style.color = "#b00000";
        }
    }
}

function addWeight()
{
    if(inputBox.value === '')
    {
        alert("Enter weight.");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = datetime + connect + inputBox.value + pounds;
        listContainer.appendChild(li);
        numbers.push(inputBox.value)
        calculate();
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
    localStorage.setItem("avgNet", net);
    localStorage.setItem("numbers", numbers);
    localStorage.setItem("change", change);
}

function displaySaved()
{
    listContainer.innerHTML = localStorage.getItem("data");
    document.getElementById("avgNet").innerHTML = localStorage.getItem("avgNet");
    numbers = localStorage.getItem("numbers");
    change = localStorage.getItem("change");
}

displaySaved();