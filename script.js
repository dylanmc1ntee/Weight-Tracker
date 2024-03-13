var now = new Date();
var datetime = now.toDateString();
document.getElementById("date").innerHTML = datetime;
var connect = "  -  ";
var pounds = "lbs";
var numbers = [];

const inputBox = document.getElementById("weight");
const listContainer = document.getElementById("log-container");

function findAvg()
{
    var avg = 0;
    var sum = [];
    if(numbers.length < 7)
    {
        document.getElementById("avgNet").innerHTML = "N/A";
    }
    else
    {
        alert("hello");
        /*
        for(let i = 0; i < numbers.length; i+=7)
        {
            sum += numbers[i];
            sum += numbers[i+1];
            sum += numbers[i+2];
            sum += numbers[i+3];
            sum += numbers[i+4];
            sum += numbers[i+5];
            sum += numbers[i+6];

            avg.push(sum/7);
            sum = 0;
        }

        var total = 0;
        for(let j = 0; j < avg.length; j++)
        {
            total += avg[j];
        }

        document.getElementById("avgNet").innerHTML = total / avg.length;
        
        for(let k = 0; k < avg.length; k++)
        {
            avg.pop;
        }
        */
        for(let i = 0; i < numbers.length - 1; i++)
        {
            sum.push(parseInt(i+1) - parseInt(i));
        }
        for(let j = 0; j < sum.length; j++)
        {
            alert("he");
            avg += parseInt(sum[i]);
            alert("he");
        }
       //avg = avg / numbers.length;
        alert(avg / sum.length);
        document.getElementById("avgNet").innerHTML = avg / sum.length;
    }
}

function restart()
{
    numbers = [];
}

function addToDo()
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
        findAvg();
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