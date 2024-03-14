var now = new Date();
var datetime = now.toDateString();
document.getElementById("date").innerHTML = datetime;
var connect = "  -  ";
var pounds = "lbs";
var numbers = [];
var change = [];

const inputBox = document.getElementById("weight");
const listContainer = document.getElementById("log-container");

/*
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
        
        for(let i = 0; i < numbers.length - 1; i++)
        {
            sum.push(parseInt(i+1) - parseInt(i));
        }
        for(let j = 0; j < sum.length; j++)
        {
            avg += parseInt(sum[j]);
        }
       //avg = avg / numbers.length;
        let net = avg / sum.length;
        let res = document.getElementById("avgNet");
        alert(avg);
        alert(net);
        res.innerHTML = net;

        if(net > 0)
        {
            res.style.color = "#007502";
        }
        else
        {
            res.style.color = "#b00000";
        }
    }
}
*/

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
}

function displaySaved()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

displaySaved();