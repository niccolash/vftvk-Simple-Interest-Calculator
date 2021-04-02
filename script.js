function compute(){   
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
  
    if (p <= 0){window.alert("Enter a positive number")
document.getElementById("principal").focus();}
   else {         
    var interest = p * r * y / 100;

    var yearNow = new Date().getFullYear();
    var yearsFromNow = (+yearNow) + (+y);

var result = document.getElementById("result");
    result.innerHTML = 
        '<div>' +
            'If you deposit <span class="number" id="principalResult\">' + p + '</span>,<br/>' +
            'at an interest rate of <span class="number" id="rateResult">' + r + '%</span>.<br/>' +
            'You will receive an amount of <span class="number" id="interestResult">' + interest + '</span>,<br/>' +
            'in the year <span class="number" id="futureYearResult">' + yearsFromNow + '</span>.<br/>' +
        '</div>'
}  
}

function rangevalue() { 
    var sv = document.getElementById("rate").value;
document.getElementById("rating").innerHTML = sv + "%";}    
